import * as Types from '../generated/types';

import { gql } from '@apollo/client';
export type MeTypeFragment = { __typename?: 'MeType', id: string, email: string, phoneNumber: string, lastActiveDate?: any | null, companyName?: string | null, address?: string | null, state?: string | null, postalCode?: string | null, country?: string | null, name?: string | null, city?: string | null };

export const MeTypeFragmentDoc = gql`
    fragment MeType on MeType {
  id
  email
  phoneNumber
  lastActiveDate
  companyName
  address
  state
  postalCode
  country
  name
  city
}
    `;