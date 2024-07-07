import { gql } from '@apollo/client';

export const getMenu = () => {
  return gql`
    query GetMenu {
      menus {
        id
        label
        sections {
          id
          identifier
          label
          description
          availability
          items {
            id
            identifier
            label
            description
            price
            availability
          }
        }
      }
    }
  `;
};
