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

export const GET_COUNTRY = gql`
    query Country($_id: String!) {
        Country(_id: $_id) {
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
}`
