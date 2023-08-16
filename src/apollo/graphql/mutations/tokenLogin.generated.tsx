import * as Types from '../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TokenLoginMutationVariables = Types.Exact<{
  isAdmin: Types.Scalars['Boolean'];
}>;


export type TokenLoginMutation = { __typename?: 'Mutation', tokenLogin?: { __typename?: 'TokenLoginMutation', accessToken?: string | null } | null };


export const TokenLoginDocument = gql`
    mutation TokenLogin($isAdmin: Boolean!) {
  tokenLogin(keepSignin: true, isAdmin: $isAdmin) {
    accessToken
  }
}
    `;
export type TokenLoginMutationFn = Apollo.MutationFunction<TokenLoginMutation, TokenLoginMutationVariables>;

/**
 * __useTokenLoginMutation__
 *
 * To run a mutation, you first call `useTokenLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenLoginMutation, { data, loading, error }] = useTokenLoginMutation({
 *   variables: {
 *      isAdmin: // value for 'isAdmin'
 *   },
 * });
 */
export function useTokenLoginMutation(baseOptions?: Apollo.MutationHookOptions<TokenLoginMutation, TokenLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenLoginMutation, TokenLoginMutationVariables>(TokenLoginDocument, options);
      }
export type TokenLoginMutationHookResult = ReturnType<typeof useTokenLoginMutation>;
export type TokenLoginMutationResult = Apollo.MutationResult<TokenLoginMutation>;
export type TokenLoginMutationOptions = Apollo.BaseMutationOptions<TokenLoginMutation, TokenLoginMutationVariables>;