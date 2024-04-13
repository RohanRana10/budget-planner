import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import loginBg from '../../assets/images/loginBg.png'
import colors from '../../utils/colors'
import services from '../../utils/services'
import { client } from '../../utils/KindeConfig';
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter();

    const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
            // User was authenticated
            await services.storeData('login','true');
            router.replace('/');
        }
    };

    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Image source={loginBg}
                style={styles.bgImage} />
            <View style={{
                backgroundColor: colors.PRIMARY,
                width: '100%',
                height: '100%',
                marginTop: -30,
                padding: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}>
                <Text style={{
                    fontSize: 35,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: colors.WHITE
                }}>
                    Personal Budget Planner</Text>

                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: colors.WHITE,
                    marginTop: 20
                }}>Take Control of Your Finances: Plan, Track, Thrive!</Text>

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={{ textAlign: 'center', color: colors.PRIMARY }}>Login/Signup</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 13,
                    color: colors.GRAY,
                    marginTop: 10,
                    textAlign: 'center'
                }}>By Login/Signup you will agree to our terms and conditions</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        width: 200,
        height: 400,
        marginTop: 70,
        borderWidth: 5,
        borderRadius: 20,
        borderColor: colors.BLACK
    },
    button: {
        backgroundColor: colors.WHITE,
        padding: 15,
        borderRadius: 99,
        paddingHorizontal: 5,
        marginTop: 30
    }
})