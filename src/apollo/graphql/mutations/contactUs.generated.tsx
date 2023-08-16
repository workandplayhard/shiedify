import * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ContactUsMutationVariables = Types.Exact<{
  email: Types.Scalars['Email'];
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  message: Types.Scalars['String'];
}>;


export type ContactUsMutation = { __typename?: 'Mutation', contactUs?: { __typename?: 'ExecuteContactUsMutation', success?: boolean | null } | null };


export const ContactUsDocument = gql`
    mutation ContactUs($email: Email!, $firstName: String!, $lastName: String!, $message: String!) {
  contactUs(
    email: $email
    firstName: $firstName
    lastName: $lastName
    message: $message
  ) {
    success
  }
}
    `;
export type ContactUsMutationFn = Apollo.MutationFunction<ContactUsMutation, ContactUsMutationVariables>;

/**
 * __useContactUsMutation__
 *
 * To run a mutation, you first call `useContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsMutation, { data, loading, error }] = useContactUsMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useContactUsMutation(baseOptions?: Apollo.MutationHookOptions<ContactUsMutation, ContactUsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContactUsMutation, ContactUsMutationVariables>(ContactUsDocument, options);
      }
export type ContactUsMutationHookResult = ReturnType<typeof useContactUsMutation>;
export type ContactUsMutationResult = Apollo.MutationResult<ContactUsMutation>;
export type ContactUsMutationOptions = Apollo.BaseMutationOptions<ContactUsMutation, ContactUsMutationVariables>;