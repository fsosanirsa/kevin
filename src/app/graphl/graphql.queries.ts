const GET_ALL = `
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