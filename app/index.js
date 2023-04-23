import React from 'react';
import { Text, View } from "react-native";
import Layout from './layout';
import Todo from '../components/Todo'


const Home = ()=> {
    return (
        <Layout>
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                    }}>
                <Todo/>
            </View>
        </Layout>
    )
}

export default Home;