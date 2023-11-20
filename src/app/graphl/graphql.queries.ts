import { gql } from 'apollo-angular'

const GET_ALL = gql`
    query get{
        tickets{
            id
            title 
            description
            createdAt
        }
    }
`
export { GET_ALL }