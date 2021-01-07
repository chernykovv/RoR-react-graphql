
import { gql } from 'react-apollo';

const movieListQuery = gql`
   query MovieListQuery {
     movies {
       id
       title
       duration
       genre
       released_date
       rating
       description
     }
   }
 `;

export default movieListQuery;