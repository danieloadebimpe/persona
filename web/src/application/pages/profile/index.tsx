import React, {useEffect, useMemo, useState} from "react";
import {ethers} from "ethers";
import {useSelector} from "react-redux";
import {selectConnection} from "../../redux";
import {Row, Spin} from "antd";

// const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
const provider = new ethers.providers.WebSocketProvider(`${process.env.REACT_APP_RPC_PROVIDER_WSS}`)

export default function AppProfile() {
    const walletState = useSelector(selectConnection);

    const [ens, setEns] = useState<{ loading: boolean, name: string, noEnsAvailable: boolean, github: string, email: string }>({
        loading: true,
        noEnsAvailable: false,
        name: '',
        github: '',
        email: '',
    })


    useEffect(() => {
        // Check if there's an ENS for the given address
        provider.lookupAddress("0x88e4519e2Baa513Ed92B0Ae4c788D7E5c5B03Ea4").then(name => {
            if (name) {
                provider.getResolver(name).then(r => {
                    // Get github & email metadata from ENS
                    const getGithubPromise = r?.getText('com.github')
                    const getEmailPromise = r?.getText('email')
                    Promise.all([getGithubPromise, getEmailPromise]).then(([r_github, r_email]) => {
                        const github = r_github || ''
                        const email = r_email || ''
                        setEns(prev => ({...prev, name, github, email}))
                    });
                }).finally(() => setEns(prev => ({...prev, loading: false})))
            } else {
                setEns(prev => ({...prev, loading: false, noEnsAvailable: true}))
            }
        })
    }, [])


    return <>
        {/* The data is fetching ... */}
        {ens.loading && <Row align={"middle"}>
            <Spin tip="Loading ..."></Spin>
        </Row>}

        {/* The data is fetched ... */}
        {!ens.loading && <Row align={"middle"}>
            {ens.noEnsAvailable ? "No ENS available" : <>
                <p>{ens.name}</p>
                <p>{ens.github ? ens.github : "no github"}</p>
                <p>{ens.email ? ens.email : "no email"}</p>
            </>
            }
        </Row>}
    </>
}

