import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { ITopNavProps } from './AssetsSelectorTypes'

export const DefaultTopNavigator = ({
    finishText,
    backText,
    selected,
    backFunction,
    onFinish,
    textStyle,
    BackbuttonStyle,
    NextbuttonStyle,
}: ITopNavProps) => (
    <Navigator>
        <BackButton style={BackbuttonStyle} onPress={backFunction}>
            <Text style={textStyle}>{backText}</Text>
        </BackButton>

        <Text style={textStyle}>
            {selected} {selected > 1 ? 'Selecionados' : 'Selecionado'}
        </Text>

        <NextButton style={NextbuttonStyle} onPress={onFinish}>
            <Text style={textStyle}>{finishText}</Text>
        </NextButton>
    </Navigator>
)

const SimpleButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 38px;
`
const BackButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 38px;
`

const NextButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 38px;
`

const Navigator = styled.View`
    width: 98%;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    padding: 5px;
`
