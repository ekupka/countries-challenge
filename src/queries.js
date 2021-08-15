import { gql } from '@apollo/client';

export const COUNTRIES = gql`{
    Country {
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
        population
        area
        topLevelDomains {
            name
        }
        flag {
            svgFile
        }
    }
}`;