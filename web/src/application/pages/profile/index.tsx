import React, {useEffect, useMemo, useState} from "react";
import {ethers} from "ethers";
import {useSelector} from "react-redux";
import {selectConnection} from "../../redux";

const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");

export default function AppProfile() {
    const walletState = useSelector(selectConnection);

    const [loading, setLoading] = useState<boolean>(true)

    const [data, setData] = useState<{ ens: string, github: string, email: string }>({
        ens: '',
        github: '',
        email: '',
    })

    useEffect(() => {
        provider.lookupAddress("0x88e4519e2Baa513Ed92B0Ae4c788D7E5c5B03Ea4").then(r => {
            setData(prev => ({...prev, ens: r as string}))
        }).finally(() => {
            setLoading(false)
        })
    }, [data.ens])


    return <>
        {loading && "Loading data ..."}
        {!loading && <>
            <p>{data.ens ? data.ens : "no ens"}</p>
            <p>{data.email ? data.ens : "no email"}</p>
            <p>{data.github ? data.ens : "no github"}</p>

        </>}
    </>;
}
