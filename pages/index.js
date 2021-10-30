/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter }  from 'next/router';
import Head from 'next/head'

const Home = () => {

    const [profile, setProfile] = useState({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        const liff = (await import('@line/liff')).default
        await liff.ready
        const profile = await liff.getProfile()
        setProfile(profile)
    }, [profile.userId])
    
    const router = useRouter()

    const handleLogout = async () => {
      // const liff = (await import('@line/liff')).default
      // await liff.ready
      liff.logout()
      router.push('/')
    }

    return (
        <div>
            <Head>My Profile</Head>
            <h1>Profile</h1>
            <div>UserId: {profile.userId}</div>
            <div>Name: {profile.displayName}</div>
            <div>Status: {profile.statusMessage}</div>
            <div>
              <img src={profile.pictureUrl} alt="My Profile" width={300} />
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home