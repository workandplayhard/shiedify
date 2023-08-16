export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Email: any;
  ExpectedErrorType: any;
  GenericScalar: any;
  Password: any;
  Upload: any;
};

/** Input object type for Account. */
export type AccountInput = {
  city?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  customPlanInfo?: InputMaybe<CustomPlanInput>;
  emailAddress: Scalars['Email'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  planType?: InputMaybe<PlanTypeChoices>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

/** Input object type for Update Account. */
export type AccountUpdateInput = {
  email?: InputMaybe<Scalars['Email']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum AdminPermissionsChoice {
  /** Clients */
  Cl = 'CL',
  /** Feedback */
  Fb = 'FB',
  /** Member */
  Mb = 'MB',
  /** Plans */
  Pl = 'PL',
  /** Support */
  Sp = 'SP',
  /** Stats */
  St = 'ST'
}

export type AlertCountryType = {
  __typename?: 'AlertCountryType';
  country: Scalars['String'];
  numAlerts: Scalars['Int'];
};

export type AlertPagination = {
  __typename?: 'AlertPagination';
  data?: Maybe<Array<Maybe<AlertType>>>;
  total: Scalars['Int'];
};

/** An enumeration. */
export enum AlertResolvedBy {
  /** already_refund */
  AlreadyRefund = 'ALREADY_REFUND',
  /** full_refund */
  FullRefund = 'FULL_REFUND',
  /** merchant_closed */
  MerchantClosed = 'MERCHANT_CLOSED',
  /** no_reason */
  NoReason = 'NO_REASON',
  /** order_not_found */
  OrderNotFound = 'ORDER_NOT_FOUND',
  /** other */
  Other = 'OTHER',
  /** remaining_refund */
  RemainingRefund = 'REMAINING_REFUND'
}

export type AlertStatisticType = {
  __typename?: 'AlertStatisticType';
  alertCountries?: Maybe<Array<Maybe<AlertCountryType>>>;
  alerts?: Maybe<Array<Maybe<AlertsType>>>;
  stats?: Maybe<StatsType>;
};

/** An enumeration. */
export enum AlertStatus {
  /** Expired */
  Ex = 'EX',
  /** Pending */
  Pd = 'PD',
  /** Resolved */
  Rs = 'RS'
}

/** An enumeration. */
export enum AlertStatusChoices {
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Resolved = 'RESOLVED'
}

export type AlertType = {
  __typename?: 'AlertType';
  amount?: Maybe<Scalars['Float']>;
  archived?: Maybe<Scalars['Boolean']>;
  arn?: Maybe<Scalars['String']>;
  businessIdNumber?: Maybe<Scalars['String']>;
  cardType?: Maybe<Scalars['String']>;
  caseId?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyType>;
  countryOrigin?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  deadlineDate?: Maybe<Scalars['DateTime']>;
  descriptor?: Maybe<DescriptorType>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isStarred: Scalars['Boolean'];
  lastFourDigit?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  notificationSet: Array<Name>;
  resolvedBy?: Maybe<AlertResolvedBy>;
  source?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Boolean']>;
  status: AlertStatus;
  transactionDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<UserType>;
};

export type AlertsType = {
  __typename?: 'AlertsType';
  descriptorName?: Maybe<Scalars['String']>;
  numAlerts?: Maybe<Scalars['Int']>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ArchiveAlertsMutation = {
  __typename?: 'ArchiveAlertsMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordMutation = {
  __typename?: 'ChangePasswordMutation';
  message?: Maybe<Scalars['Boolean']>;
};

export type ClientDescriptorsPagination = {
  __typename?: 'ClientDescriptorsPagination';
  data?: Maybe<Array<Maybe<DescriptorType>>>;
  total: Scalars['Int'];
};

export type ClientIncomingAlertType = {
  __typename?: 'ClientIncomingAlertType';
  sources?: Maybe<Array<Maybe<AlertsType>>>;
  stats?: Maybe<IncomingStatsType>;
};

export type ClientPagination = {
  __typename?: 'ClientPagination';
  data?: Maybe<Array<Maybe<ClientType>>>;
  total: Scalars['Int'];
};

export type ClientRecentActivityPagination = {
  __typename?: 'ClientRecentActivityPagination';
  data?: Maybe<Array<Maybe<ClientRecentActivityType>>>;
  total: Scalars['Int'];
};

export type ClientRecentActivityType = {
  __typename?: 'ClientRecentActivityType';
  createdAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ClientType = {
  __typename?: 'ClientType';
  clientDetail?: Maybe<MeType>;
  companyDetail?: Maybe<CompanyType>;
  priceDetail?: Maybe<Array<Maybe<PlanPriceType>>>;
};

export type CompanyType = {
  __typename?: 'CompanyType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** Input object type for Update Company related info. */
export type CompanyUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type ConfigureNotificationMutation = {
  __typename?: 'ConfigureNotificationMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ConfirmDescriptorMutation = {
  __typename?: 'ConfirmDescriptorMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateAccountMutation = {
  __typename?: 'CreateAccountMutation';
  account?: Maybe<MeType>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateDescriptorsMutation = {
  __typename?: 'CreateDescriptorsMutation';
  inValid?: Maybe<Array<Maybe<Scalars['String']>>>;
  success?: Maybe<Scalars['Boolean']>;
  valid?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateMerchant = {
  __typename?: 'CreateMerchant';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreatePlanMutation = {
  __typename?: 'CreatePlanMutation';
  plans?: Maybe<Array<Maybe<PlansType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateRemarkMutation = {
  __typename?: 'CreateRemarkMutation';
  remark?: Maybe<RemarkType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Input object type for CustomPlan. */
export type CustomPlanInput = {
  currency: Scalars['String'];
  prices: Array<InputMaybe<PlanPriceInput>>;
};

export type DeleteAccountMutation = {
  __typename?: 'DeleteAccountMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Input object type for delete object. */
export type DeleteObjectInput = {
  id: Scalars['ID'];
};

export type DeletePlansMutation = {
  __typename?: 'DeletePlansMutation';
  deletedPlanIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DescriptorPagination = {
  __typename?: 'DescriptorPagination';
  data?: Maybe<Array<Maybe<DescriptorType>>>;
  total: Scalars['Int'];
};

/** An enumeration. */
export enum DescriptorStatus {
  /** Active */
  Ac = 'AC',
  /** PendingApproval */
  Pa = 'PA',
  /** PendingRemoval */
  Pr = 'PR',
  /** Removed */
  Rm = 'RM'
}

export enum DescriptorStatusType {
  Active = 'ACTIVE',
  PendingApproval = 'PENDING_APPROVAL',
  PendingRemoval = 'PENDING_REMOVAL',
  Removed = 'REMOVED'
}

export type DescriptorType = {
  __typename?: 'DescriptorType';
  alertsReceived: Scalars['Int'];
  id: Scalars['ID'];
  removedBy?: Maybe<Scalars['String']>;
  status: DescriptorStatus;
  title: Scalars['String'];
  user?: Maybe<MeType>;
};

export type ExecuteContactUsMutation = {
  __typename?: 'ExecuteContactUsMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type IncomingStatsType = {
  __typename?: 'IncomingStatsType';
  change?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<StatsDayType>>>;
};

export type LoginMutation = {
  __typename?: 'LoginMutation';
  accessToken?: Maybe<Scalars['String']>;
};

export type MeType = {
  __typename?: 'MeType';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  lastActiveDate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

/** Main Mutation class which inherits from Mutations from apps */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  archiveAlerts?: Maybe<ArchiveAlertsMutation>;
  changePassword?: Maybe<ChangePasswordMutation>;
  configureNotification?: Maybe<ConfigureNotificationMutation>;
  confirmDescriptors?: Maybe<ConfirmDescriptorMutation>;
  contactUs?: Maybe<ExecuteContactUsMutation>;
  createAccount?: Maybe<CreateAccountMutation>;
  createDescriptors?: Maybe<CreateDescriptorsMutation>;
  createMerchant?: Maybe<CreateMerchant>;
  createPlans?: Maybe<CreatePlanMutation>;
  createRemark?: Maybe<CreateRemarkMutation>;
  deleteAccount?: Maybe<DeleteAccountMutation>;
  deletePlans?: Maybe<DeletePlansMutation>;
  forgotPassword?: Maybe<Scalars['String']>;
  impersonate?: Maybe<Scalars['String']>;
  login?: Maybe<LoginMutation>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  requestDescriptorRemoval?: Maybe<Scalars['String']>;
  resendActivationEmail?: Maybe<ResendActivationEmailMutation>;
  resetPassword?: Maybe<Scalars['String']>;
  resolveAlerts?: Maybe<ResolveAlertsMutation>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  sendResetPasswordEmail?: Maybe<SendResetPasswordEmailMutation>;
  starAlert?: Maybe<StarringAlertMutation>;
  subscribeToNewsletter?: Maybe<SubscribeNotificationMutation>;
  tokenLogin?: Maybe<TokenLoginMutation>;
  updateAccount?: Maybe<UpdateAccountMutation>;
  updatePlans?: Maybe<UpdatePlansMutation>;
  updateProfilePic?: Maybe<UpdateProfilePic>;
  updateRemark?: Maybe<UpdateRemarkMutation>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  verifyCurrentPassword?: Maybe<VerifyCurrentPasswordMutation>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationArchiveAlertsArgs = {
  alertIds: Array<InputMaybe<Scalars['ID']>>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationChangePasswordArgs = {
  newPassword: Scalars['Password'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationConfigureNotificationArgs = {
  notificationSettingEntities: NotificationSettingInput;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationConfirmDescriptorsArgs = {
  confirmationToken: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationContactUsArgs = {
  email: Scalars['Email'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  message: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationCreateAccountArgs = {
  accountEntities?: InputMaybe<AccountInput>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationCreateDescriptorsArgs = {
  descriptors: Array<InputMaybe<Scalars['String']>>;
  merchantId?: InputMaybe<Scalars['String']>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationCreateMerchantArgs = {
  country?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  website: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationCreatePlansArgs = {
  planEntities: Array<InputMaybe<PlansInput>>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationCreateRemarkArgs = {
  remarkInput: RemarkInput;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationDeleteAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationDeletePlansArgs = {
  planIds: Array<InputMaybe<DeleteObjectInput>>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationImpersonateArgs = {
  clientId: Scalars['ID'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationLoginArgs = {
  email: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  keepSignin: Scalars['Boolean'];
  password: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationRequestDescriptorRemovalArgs = {
  descriptorIds: Array<InputMaybe<Scalars['ID']>>;
  removedBy: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationResetPasswordArgs = {
  newPassword: Scalars['Password'];
  token: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationResolveAlertsArgs = {
  alertIds: Array<InputMaybe<Scalars['ID']>>;
  resolvedBy?: InputMaybe<ResolvedByChoices>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationStarAlertArgs = {
  alertId: Scalars['ID'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationSubscribeToNewsletterArgs = {
  newsletterSubscriptionEmail: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationTokenLoginArgs = {
  isAdmin: Scalars['Boolean'];
  keepSignin: Scalars['Boolean'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationUpdateAccountArgs = {
  account?: InputMaybe<AccountUpdateInput>;
  company?: InputMaybe<CompanyUpdateInput>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationUpdatePlansArgs = {
  planEntities: Array<InputMaybe<UpdatePlansInput>>;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationUpdateProfilePicArgs = {
  url: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationUpdateRemarkArgs = {
  remarkInput: UpdateRemarkInput;
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


/** Main Mutation class which inherits from Mutations from apps */
export type MutationVerifyCurrentPasswordArgs = {
  password: Scalars['Password'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type NotificationSettingInput = {
  allowed: Scalars['Boolean'];
  followUps: SmsEmailInput;
  importantOnly: SmsEmailInput;
  receiveNewStats?: InputMaybe<Scalars['Boolean']>;
  receiveNewsAndUpdate?: InputMaybe<Scalars['Boolean']>;
  receiveOffersAndDeals?: InputMaybe<Scalars['Boolean']>;
  receiveTipsAndTutorials?: InputMaybe<Scalars['Boolean']>;
  summary: SummaryInput;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum PlanPlansType {
  /** Basic */
  Basic = 'BASIC',
  /** Custom */
  Custom = 'CUSTOM',
  /** Plus */
  Plus = 'PLUS',
  /** Premium */
  Premium = 'PREMIUM'
}

export type PlanPriceInput = {
  alertFrom: Scalars['Int'];
  alertTo: Scalars['Int'];
  priceFrom: Scalars['Float'];
  priceTo: Scalars['Float'];
};

export type PlanPriceType = {
  __typename?: 'PlanPriceType';
  alertCountFrom: Scalars['Int'];
  alertCountTo: Scalars['Int'];
  ethocaPrice: Scalars['Float'];
  id: Scalars['ID'];
  verifiPrice: Scalars['Float'];
};

/** An enumeration. */
export enum PlanTypeChoices {
  Basic = 'BASIC',
  Custom = 'CUSTOM',
  Plus = 'PLUS',
  Premium = 'PREMIUM'
}

/** Input object type for Plan. */
export type PlansInput = {
  currency: Scalars['String'];
  plansType: PlanTypeChoices;
  priceIds: Array<InputMaybe<Scalars['ID']>>;
};

export type PlansType = {
  __typename?: 'PlansType';
  currency: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  plansType: PlanPlansType;
  price?: Maybe<Array<Maybe<PlanPriceType>>>;
};

export type PriceRangeInput = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

/** Main Query class which inherits from Queries from apps */
export type Query = {
  __typename?: 'Query';
  getAccount?: Maybe<MeType>;
  getAlertStatistics?: Maybe<AlertStatisticType>;
  getAlerts?: Maybe<AlertPagination>;
  getClientDescriptors?: Maybe<ClientDescriptorsPagination>;
  getClientDetail?: Maybe<ClientType>;
  getClientIncomingAlerts?: Maybe<ClientIncomingAlertType>;
  getClientRecentActivity?: Maybe<ClientRecentActivityPagination>;
  getClients?: Maybe<ClientPagination>;
  getDescriptors?: Maybe<DescriptorPagination>;
  getPlan?: Maybe<PlansType>;
  getPlans?: Maybe<Array<Maybe<PlansType>>>;
  getReports?: Maybe<AlertPagination>;
  getSignedUrl?: Maybe<Scalars['String']>;
  me?: Maybe<MeType>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetAccountArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetAlertStatisticsArgs = {
  dateRange: TimePeriodInput;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetAlertsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  status: AlertStatusChoices;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetClientDescriptorsArgs = {
  clientId: Scalars['String'];
  limit: Scalars['Int'];
  page: Scalars['Int'];
  status: DescriptorStatusType;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetClientDetailArgs = {
  userId: Scalars['Int'];
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetClientIncomingAlertsArgs = {
  clientId: Scalars['String'];
  dateRange: TimePeriodInput;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetClientRecentActivityArgs = {
  clientId: Scalars['String'];
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetClientsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  status: UserStatusChoices;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetDescriptorsArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetPlanArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetPlansArgs = {
  planType: PlanTypeChoices;
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetReportsArgs = {
  filter?: InputMaybe<ReportFilterInput>;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/** Main Query class which inherits from Queries from apps */
export type QueryGetSignedUrlArgs = {
  fileName: Scalars['String'];
};


/** Main Query class which inherits from Queries from apps */
export type QueryUserArgs = {
  id: Scalars['ID'];
};


/** Main Query class which inherits from Queries from apps */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type RemarkInput = {
  adminId: Scalars['ID'];
  clientId: Scalars['ID'];
  content: Scalars['String'];
  senderType: SenderType;
};

export type RemarkType = {
  __typename?: 'RemarkType';
  adminId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  senderType: RemarksSenderType;
};

/** An enumeration. */
export enum RemarksSenderType {
  /** Admin */
  Admin = 'ADMIN',
  /** User */
  User = 'USER'
}

export type ReportFilterInput = {
  cardType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  descriptorIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  priceRange?: InputMaybe<PriceRangeInput>;
  source?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status?: InputMaybe<Array<InputMaybe<AlertStatusChoices>>>;
  timePeriod?: InputMaybe<TimePeriodInput>;
};

export type ResendActivationEmailMutation = {
  __typename?: 'ResendActivationEmailMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type ResolveAlertsMutation = {
  __typename?: 'ResolveAlertsMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  updatedAlerts?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** An enumeration. */
export enum ResolvedByChoices {
  AlreadyRefund = 'already_refund',
  FullRefund = 'full_refund',
  MerchantClosed = 'merchant_closed',
  NoReason = 'no_reason',
  OrderNotFound = 'order_not_found',
  Other = 'other',
  RemainingRefund = 'remaining_refund'
}

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type SmsEmailInput = {
  email: Scalars['Boolean'];
  sms: Scalars['Boolean'];
};

export type SendResetPasswordEmailMutation = {
  __typename?: 'SendResetPasswordEmailMutation';
  success?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum SenderType {
  Admin = 'ADMIN',
  User = 'USER'
}

export type StarringAlertMutation = {
  __typename?: 'StarringAlertMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type StatsDayType = {
  __typename?: 'StatsDayType';
  day?: Maybe<Scalars['String']>;
  numAlerts?: Maybe<Scalars['Int']>;
};

export type StatsType = {
  __typename?: 'StatsType';
  change?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<StatsDayType>>>;
};

export type SubscribeNotificationMutation = {
  __typename?: 'SubscribeNotificationMutation';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Main Subscription class which inherits from Subscriptions from apps */
export type Subscription = {
  __typename?: 'Subscription';
  newNotification?: Maybe<Name>;
};


/** Main Subscription class which inherits from Subscriptions from apps */
export type SubscriptionNewNotificationArgs = {
  companyId?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum SummaryChoices {
  Summarize30 = 'SUMMARIZE30',
  Summarize60 = 'SUMMARIZE60',
  Summarize120 = 'SUMMARIZE120'
}

export type SummaryInput = {
  email: Scalars['Boolean'];
  sms: Scalars['Boolean'];
  type: SummaryChoices;
};

export type TimePeriodInput = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

export type TokenLoginMutation = {
  __typename?: 'TokenLoginMutation';
  accessToken?: Maybe<Scalars['String']>;
};

export type UpdateAccountMutation = {
  __typename?: 'UpdateAccountMutation';
  account?: Maybe<MeType>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Input object type for Updating Plan. */
export type UpdatePlansInput = {
  currency: Scalars['String'];
  id: Scalars['ID'];
  plansType: PlanTypeChoices;
  priceIds: Array<InputMaybe<Scalars['ID']>>;
};

export type UpdatePlansMutation = {
  __typename?: 'UpdatePlansMutation';
  message?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<PlansType>>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateProfilePic = {
  __typename?: 'UpdateProfilePic';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateRemarkInput = {
  content: Scalars['String'];
  remarkId: Scalars['ID'];
  senderType: SenderType;
};

export type UpdateRemarkMutation = {
  __typename?: 'UpdateRemarkMutation';
  remark?: Maybe<RemarkType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the object. */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissionsChoice: AdminPermissionsChoice;
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

/** An enumeration. */
export enum UserStatusChoices {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Disabled = 'DISABLED',
  Pending = 'PENDING'
}

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifyCurrentPasswordMutation = {
  __typename?: 'VerifyCurrentPasswordMutation';
  valid?: Maybe<Scalars['Boolean']>;
};

export type Name = {
  __typename?: 'name';
  alert?: Maybe<AlertType>;
  amount?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyType>;
  createdAt: Scalars['DateTime'];
  deadlineDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isReadn?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  timeToSend?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};
