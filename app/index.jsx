import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../utils/services'
import { client } from '../utils/KindeConfig';

export default function Home() {

    const router = useRouter();
    //check if user is already authentiated
    const checkUserAuth = async () => {
        const result = await services.getData('login');
        if (result !== 'true') {
            router.replace('/login');
        }
    }

    const handleLogout = async () => {
        const loggedOut = await client.logout();
        if (loggedOut) {
            // User was logged out
            await services.storeData('login', 'false');
            router.replace('/login');

        }
    };

    useEffect(() => {
        checkUserAuth();
    }, [])

    return (
        <View style={{
            marginTop: 20
        }}>
            <Text>Home</Text>
            <Button title={'Logout'} onPress={handleLogout} />
        </View>
    )
}

const styles = StyleSheet.create({})