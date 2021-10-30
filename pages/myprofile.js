import { useEffect, useState } from 'react'
import Head from 'next/head'

const MyProfile = () => {

    const [profile, setProfile] = useState({})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        const liff = (await import('@line/liff')).default
        await liff.ready
        const profile = await liff.getProfile()
        setProfile(profile)
    }, [profile.userId])

    return (
        <div>
            <Head>My Profile</Head>
            <h1>Profile</h1>
            <div>UserId: {profile.userId}</div>
            <div>Name: {profile.displayName}</div>
            <div>Status: {profile.statusMessage}</div>
            <div>{profile.pictureUrl}</div>
        </div>
    )
}

export default MyProfile