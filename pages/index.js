import { useEffect, useState } from 'react'
import { useRouter }  from 'next/router';
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
    
    const router = useRouter()

    const handleLogout = async () => {
      liff.logout()
      router.push('/')
    }

    return (
        <section>
            <Head>My Profile</Head>
            <h1>Profile</h1>
            <div>
              {profile.pictureUrl && <Image
                src={profile.pictureUrl}
                alt={profile.displayName}
                width={500}
                height={500}
              />}
            </div>
            <div>UserId: {profile.userId}</div>
            <div>Name: {profile.displayName}</div>
            <div>Status: {profile.statusMessage}</div>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default Home