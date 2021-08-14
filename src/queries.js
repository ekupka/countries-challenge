import { gql } from '@apollo/client';

export const COUNTRIES = gql`{
    Country(first:20) {
        _id
        name
        capital
        flag {
            svgFile
        }
    }
}`;

export const COUNTRY = (_id) => gql`{
    Country(_id:"${_id}") {
        name
        capital
        flag {
            svgFile
        }
    }
}`;