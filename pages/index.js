import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  const [profile, setProfile] = useState({})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        const liff = (await import('@line/liff')).default
        await liff.ready
        const profile = await liff.getProfile()
        setProfile(profile)
    }, [profile.userId])

    handleLogout = async() => {

      const liff = (await import('@line/liff')).default
      await liff.ready
      liff.logout()

    }

    return (
        <div>
            <Head>My Profile</Head>
            <h1>Profile</h1>
            <div>UserId: {profile.userId}</div>
            <div>Name: {profile.displayName}</div>
            <div>Status: {profile.statusMessage}</div>
            <div><Image src={profile.pictureUrl} alt="profile image" width={300} /></div>
            <button onClick={this.handleLogout}>Logout</button>
        </div>
    )
}

export default Home