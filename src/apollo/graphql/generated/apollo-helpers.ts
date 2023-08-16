import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AlertCountryTypeKeySpecifier = ('country' | 'numAlerts' | AlertCountryTypeKeySpecifier)[];
export type AlertCountryTypeFieldPolicy = {
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	numAlerts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlertPaginationKeySpecifier = ('data' | 'total' | AlertPaginationKeySpecifier)[];
export type AlertPaginationFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlertStatisticTypeKeySpecifier = ('alertCountries' | 'alerts' | 'stats' | AlertStatisticTypeKeySpecifier)[];
export type AlertStatisticTypeFieldPolicy = {
	alertCountries?: FieldPolicy<any> | FieldReadFunction<any>,
	alerts?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlertTypeKeySpecifier = ('amount' | 'archived' | 'arn' | 'businessIdNumber' | 'cardType' | 'caseId' | 'company' | 'countryOrigin' | 'createdAt' | 'currency' | 'deadlineDate' | 'descriptor' | 'email' | 'fullName' | 'id' | 'isStarred' | 'lastFourDigit' | 'notes' | 'notificationSet' | 'resolvedBy' | 'source' | 'start' | 'status' | 'transactionDate' | 'updatedAt' | 'user' | AlertTypeKeySpecifier)[];
export type AlertTypeFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	archived?: FieldPolicy<any> | FieldReadFunction<any>,
	arn?: FieldPolicy<any> | FieldReadFunction<any>,
	businessIdNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	cardType?: FieldPolicy<any> | FieldReadFunction<any>,
	caseId?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	countryOrigin?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	deadlineDate?: FieldPolicy<any> | FieldReadFunction<any>,
	descriptor?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isStarred?: FieldPolicy<any> | FieldReadFunction<any>,
	lastFourDigit?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationSet?: FieldPolicy<any> | FieldReadFunction<any>,
	resolvedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlertsTypeKeySpecifier = ('descriptorName' | 'numAlerts' | AlertsTypeKeySpecifier)[];
export type AlertsTypeFieldPolicy = {
	descriptorName?: FieldPolicy<any> | FieldReadFunction<any>,
	numAlerts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveAccountKeySpecifier = ('errors' | 'success' | ArchiveAccountKeySpecifier)[];
export type ArchiveAccountFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArchiveAlertsMutationKeySpecifier = ('message' | 'success' | ArchiveAlertsMutationKeySpecifier)[];
export type ArchiveAlertsMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangePasswordMutationKeySpecifier = ('message' | ChangePasswordMutationKeySpecifier)[];
export type ChangePasswordMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientDescriptorsPaginationKeySpecifier = ('data' | 'total' | ClientDescriptorsPaginationKeySpecifier)[];
export type ClientDescriptorsPaginationFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientIncomingAlertTypeKeySpecifier = ('sources' | 'stats' | ClientIncomingAlertTypeKeySpecifier)[];
export type ClientIncomingAlertTypeFieldPolicy = {
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientPaginationKeySpecifier = ('data' | 'total' | ClientPaginationKeySpecifier)[];
export type ClientPaginationFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientRecentActivityPaginationKeySpecifier = ('data' | 'total' | ClientRecentActivityPaginationKeySpecifier)[];
export type ClientRecentActivityPaginationFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientRecentActivityTypeKeySpecifier = ('createdAt' | 'title' | ClientRecentActivityTypeKeySpecifier)[];
export type ClientRecentActivityTypeFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientTypeKeySpecifier = ('clientDetail' | 'companyDetail' | 'priceDetail' | ClientTypeKeySpecifier)[];
export type ClientTypeFieldPolicy = {
	clientDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	companyDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	priceDetail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyTypeKeySpecifier = ('id' | 'name' | CompanyTypeKeySpecifier)[];
export type CompanyTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigureNotificationMutationKeySpecifier = ('message' | 'success' | ConfigureNotificationMutationKeySpecifier)[];
export type ConfigureNotificationMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfirmDescriptorMutationKeySpecifier = ('message' | 'success' | ConfirmDescriptorMutationKeySpecifier)[];
export type ConfirmDescriptorMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAccountMutationKeySpecifier = ('account' | 'message' | 'success' | CreateAccountMutationKeySpecifier)[];
export type CreateAccountMutationFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateDescriptorsMutationKeySpecifier = ('inValid' | 'success' | 'valid' | CreateDescriptorsMutationKeySpecifier)[];
export type CreateDescriptorsMutationFieldPolicy = {
	inValid?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	valid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMerchantKeySpecifier = ('message' | 'success' | CreateMerchantKeySpecifier)[];
export type CreateMerchantFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePlanMutationKeySpecifier = ('plans' | 'success' | CreatePlanMutationKeySpecifier)[];
export type CreatePlanMutationFieldPolicy = {
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateRemarkMutationKeySpecifier = ('remark' | 'success' | CreateRemarkMutationKeySpecifier)[];
export type CreateRemarkMutationFieldPolicy = {
	remark?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAccountMutationKeySpecifier = ('message' | 'success' | DeleteAccountMutationKeySpecifier)[];
export type DeleteAccountMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePlansMutationKeySpecifier = ('deletedPlanIds' | 'message' | 'success' | DeletePlansMutationKeySpecifier)[];
export type DeletePlansMutationFieldPolicy = {
	deletedPlanIds?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DescriptorPaginationKeySpecifier = ('data' | 'total' | DescriptorPaginationKeySpecifier)[];
export type DescriptorPaginationFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DescriptorTypeKeySpecifier = ('alertsReceived' | 'id' | 'removedBy' | 'status' | 'title' | 'user' | DescriptorTypeKeySpecifier)[];
export type DescriptorTypeFieldPolicy = {
	alertsReceived?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	removedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExecuteContactUsMutationKeySpecifier = ('success' | ExecuteContactUsMutationKeySpecifier)[];
export type ExecuteContactUsMutationFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncomingStatsTypeKeySpecifier = ('change' | 'data' | IncomingStatsTypeKeySpecifier)[];
export type IncomingStatsTypeFieldPolicy = {
	change?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginMutationKeySpecifier = ('accessToken' | LoginMutationKeySpecifier)[];
export type LoginMutationFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MeTypeKeySpecifier = ('address' | 'city' | 'companyName' | 'country' | 'email' | 'id' | 'lastActiveDate' | 'name' | 'phoneNumber' | 'postalCode' | 'state' | MeTypeKeySpecifier)[];
export type MeTypeFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastActiveDate?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('archiveAccount' | 'archiveAlerts' | 'changePassword' | 'configureNotification' | 'confirmDescriptors' | 'contactUs' | 'createAccount' | 'createDescriptors' | 'createMerchant' | 'createPlans' | 'createRemark' | 'deleteAccount' | 'deletePlans' | 'forgotPassword' | 'impersonate' | 'login' | 'refreshToken' | 'register' | 'requestDescriptorRemoval' | 'resendActivationEmail' | 'resetPassword' | 'resolveAlerts' | 'revokeToken' | 'sendResetPasswordEmail' | 'starAlert' | 'subscribeToNewsletter' | 'tokenLogin' | 'updateAccount' | 'updatePlans' | 'updateProfilePic' | 'updateRemark' | 'verifyAccount' | 'verifyCurrentPassword' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	archiveAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	archiveAlerts?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	configureNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmDescriptors?: FieldPolicy<any> | FieldReadFunction<any>,
	contactUs?: FieldPolicy<any> | FieldReadFunction<any>,
	createAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	createDescriptors?: FieldPolicy<any> | FieldReadFunction<any>,
	createMerchant?: FieldPolicy<any> | FieldReadFunction<any>,
	createPlans?: FieldPolicy<any> | FieldReadFunction<any>,
	createRemark?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePlans?: FieldPolicy<any> | FieldReadFunction<any>,
	forgotPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	impersonate?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	requestDescriptorRemoval?: FieldPolicy<any> | FieldReadFunction<any>,
	resendActivationEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveAlerts?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeToken?: FieldPolicy<any> | FieldReadFunction<any>,
	sendResetPasswordEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	starAlert?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribeToNewsletter?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlans?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProfilePic?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRemark?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	verifyCurrentPassword?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlanPriceTypeKeySpecifier = ('alertCountFrom' | 'alertCountTo' | 'ethocaPrice' | 'id' | 'verifiPrice' | PlanPriceTypeKeySpecifier)[];
export type PlanPriceTypeFieldPolicy = {
	alertCountFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	alertCountTo?: FieldPolicy<any> | FieldReadFunction<any>,
	ethocaPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	verifiPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlansTypeKeySpecifier = ('currency' | 'description' | 'id' | 'name' | 'plansType' | 'price' | PlansTypeKeySpecifier)[];
export type PlansTypeFieldPolicy = {
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	plansType?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getAccount' | 'getAlertStatistics' | 'getAlerts' | 'getClientDescriptors' | 'getClientDetail' | 'getClientIncomingAlerts' | 'getClientRecentActivity' | 'getClients' | 'getDescriptors' | 'getPlan' | 'getPlans' | 'getReports' | 'getSignedUrl' | 'me' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	getAlertStatistics?: FieldPolicy<any> | FieldReadFunction<any>,
	getAlerts?: FieldPolicy<any> | FieldReadFunction<any>,
	getClientDescriptors?: FieldPolicy<any> | FieldReadFunction<any>,
	getClientDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	getClientIncomingAlerts?: FieldPolicy<any> | FieldReadFunction<any>,
	getClientRecentActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	getClients?: FieldPolicy<any> | FieldReadFunction<any>,
	getDescriptors?: FieldPolicy<any> | FieldReadFunction<any>,
	getPlan?: FieldPolicy<any> | FieldReadFunction<any>,
	getPlans?: FieldPolicy<any> | FieldReadFunction<any>,
	getReports?: FieldPolicy<any> | FieldReadFunction<any>,
	getSignedUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefreshTokenKeySpecifier = ('errors' | 'payload' | 'refreshToken' | 'success' | 'token' | RefreshTokenKeySpecifier)[];
export type RefreshTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	payload?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterKeySpecifier = ('errors' | 'success' | 'token' | RegisterKeySpecifier)[];
export type RegisterFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RemarkTypeKeySpecifier = ('adminId' | 'content' | 'senderType' | RemarkTypeKeySpecifier)[];
export type RemarkTypeFieldPolicy = {
	adminId?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	senderType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResendActivationEmailMutationKeySpecifier = ('success' | ResendActivationEmailMutationKeySpecifier)[];
export type ResendActivationEmailMutationFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolveAlertsMutationKeySpecifier = ('message' | 'success' | 'updatedAlerts' | ResolveAlertsMutationKeySpecifier)[];
export type ResolveAlertsMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAlerts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeTokenKeySpecifier = ('errors' | 'revoked' | 'success' | RevokeTokenKeySpecifier)[];
export type RevokeTokenFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	revoked?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendResetPasswordEmailMutationKeySpecifier = ('success' | SendResetPasswordEmailMutationKeySpecifier)[];
export type SendResetPasswordEmailMutationFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StarringAlertMutationKeySpecifier = ('message' | 'success' | StarringAlertMutationKeySpecifier)[];
export type StarringAlertMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatsDayTypeKeySpecifier = ('day' | 'numAlerts' | StatsDayTypeKeySpecifier)[];
export type StatsDayTypeFieldPolicy = {
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	numAlerts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatsTypeKeySpecifier = ('change' | 'data' | StatsTypeKeySpecifier)[];
export type StatsTypeFieldPolicy = {
	change?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribeNotificationMutationKeySpecifier = ('message' | 'success' | SubscribeNotificationMutationKeySpecifier)[];
export type SubscribeNotificationMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('newNotification' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	newNotification?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenLoginMutationKeySpecifier = ('accessToken' | TokenLoginMutationKeySpecifier)[];
export type TokenLoginMutationFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateAccountMutationKeySpecifier = ('account' | 'message' | 'success' | UpdateAccountMutationKeySpecifier)[];
export type UpdateAccountMutationFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePlansMutationKeySpecifier = ('message' | 'plans' | 'success' | UpdatePlansMutationKeySpecifier)[];
export type UpdatePlansMutationFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProfilePicKeySpecifier = ('success' | UpdateProfilePicKeySpecifier)[];
export type UpdateProfilePicFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateRemarkMutationKeySpecifier = ('remark' | 'success' | UpdateRemarkMutationKeySpecifier)[];
export type UpdateRemarkMutationFieldPolicy = {
	remark?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserNodeKeySpecifier = ('archived' | 'createdAt' | 'email' | 'firstName' | 'id' | 'isActive' | 'isStaff' | 'lastLogin' | 'lastName' | 'name' | 'permissionsChoice' | 'pk' | 'secondaryEmail' | 'updatedAt' | 'verified' | UserNodeKeySpecifier)[];
export type UserNodeFieldPolicy = {
	archived?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionsChoice?: FieldPolicy<any> | FieldReadFunction<any>,
	pk?: FieldPolicy<any> | FieldReadFunction<any>,
	secondaryEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserNodeConnectionKeySpecifier = ('edges' | 'pageInfo' | UserNodeConnectionKeySpecifier)[];
export type UserNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserNodeEdgeKeySpecifier = ('cursor' | 'node' | UserNodeEdgeKeySpecifier)[];
export type UserNodeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTypeKeySpecifier = ('email' | 'firstName' | 'id' | 'lastName' | 'phoneNumber' | UserTypeKeySpecifier)[];
export type UserTypeFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyAccountKeySpecifier = ('errors' | 'success' | VerifyAccountKeySpecifier)[];
export type VerifyAccountFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VerifyCurrentPasswordMutationKeySpecifier = ('valid' | VerifyCurrentPasswordMutationKeySpecifier)[];
export type VerifyCurrentPasswordMutationFieldPolicy = {
	valid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type nameKeySpecifier = ('alert' | 'amount' | 'company' | 'createdAt' | 'deadlineDate' | 'id' | 'isReadn' | 'text' | 'timeToSend' | 'title' | 'updatedAt' | nameKeySpecifier)[];
export type nameFieldPolicy = {
	alert?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deadlineDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isReadn?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	timeToSend?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AlertCountryType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlertCountryTypeKeySpecifier | (() => undefined | AlertCountryTypeKeySpecifier),
		fields?: AlertCountryTypeFieldPolicy,
	},
	AlertPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlertPaginationKeySpecifier | (() => undefined | AlertPaginationKeySpecifier),
		fields?: AlertPaginationFieldPolicy,
	},
	AlertStatisticType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlertStatisticTypeKeySpecifier | (() => undefined | AlertStatisticTypeKeySpecifier),
		fields?: AlertStatisticTypeFieldPolicy,
	},
	AlertType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlertTypeKeySpecifier | (() => undefined | AlertTypeKeySpecifier),
		fields?: AlertTypeFieldPolicy,
	},
	AlertsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlertsTypeKeySpecifier | (() => undefined | AlertsTypeKeySpecifier),
		fields?: AlertsTypeFieldPolicy,
	},
	ArchiveAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveAccountKeySpecifier | (() => undefined | ArchiveAccountKeySpecifier),
		fields?: ArchiveAccountFieldPolicy,
	},
	ArchiveAlertsMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArchiveAlertsMutationKeySpecifier | (() => undefined | ArchiveAlertsMutationKeySpecifier),
		fields?: ArchiveAlertsMutationFieldPolicy,
	},
	ChangePasswordMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangePasswordMutationKeySpecifier | (() => undefined | ChangePasswordMutationKeySpecifier),
		fields?: ChangePasswordMutationFieldPolicy,
	},
	ClientDescriptorsPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientDescriptorsPaginationKeySpecifier | (() => undefined | ClientDescriptorsPaginationKeySpecifier),
		fields?: ClientDescriptorsPaginationFieldPolicy,
	},
	ClientIncomingAlertType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientIncomingAlertTypeKeySpecifier | (() => undefined | ClientIncomingAlertTypeKeySpecifier),
		fields?: ClientIncomingAlertTypeFieldPolicy,
	},
	ClientPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientPaginationKeySpecifier | (() => undefined | ClientPaginationKeySpecifier),
		fields?: ClientPaginationFieldPolicy,
	},
	ClientRecentActivityPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientRecentActivityPaginationKeySpecifier | (() => undefined | ClientRecentActivityPaginationKeySpecifier),
		fields?: ClientRecentActivityPaginationFieldPolicy,
	},
	ClientRecentActivityType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientRecentActivityTypeKeySpecifier | (() => undefined | ClientRecentActivityTypeKeySpecifier),
		fields?: ClientRecentActivityTypeFieldPolicy,
	},
	ClientType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientTypeKeySpecifier | (() => undefined | ClientTypeKeySpecifier),
		fields?: ClientTypeFieldPolicy,
	},
	CompanyType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyTypeKeySpecifier | (() => undefined | CompanyTypeKeySpecifier),
		fields?: CompanyTypeFieldPolicy,
	},
	ConfigureNotificationMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigureNotificationMutationKeySpecifier | (() => undefined | ConfigureNotificationMutationKeySpecifier),
		fields?: ConfigureNotificationMutationFieldPolicy,
	},
	ConfirmDescriptorMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfirmDescriptorMutationKeySpecifier | (() => undefined | ConfirmDescriptorMutationKeySpecifier),
		fields?: ConfirmDescriptorMutationFieldPolicy,
	},
	CreateAccountMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAccountMutationKeySpecifier | (() => undefined | CreateAccountMutationKeySpecifier),
		fields?: CreateAccountMutationFieldPolicy,
	},
	CreateDescriptorsMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateDescriptorsMutationKeySpecifier | (() => undefined | CreateDescriptorsMutationKeySpecifier),
		fields?: CreateDescriptorsMutationFieldPolicy,
	},
	CreateMerchant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMerchantKeySpecifier | (() => undefined | CreateMerchantKeySpecifier),
		fields?: CreateMerchantFieldPolicy,
	},
	CreatePlanMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePlanMutationKeySpecifier | (() => undefined | CreatePlanMutationKeySpecifier),
		fields?: CreatePlanMutationFieldPolicy,
	},
	CreateRemarkMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateRemarkMutationKeySpecifier | (() => undefined | CreateRemarkMutationKeySpecifier),
		fields?: CreateRemarkMutationFieldPolicy,
	},
	DeleteAccountMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAccountMutationKeySpecifier | (() => undefined | DeleteAccountMutationKeySpecifier),
		fields?: DeleteAccountMutationFieldPolicy,
	},
	DeletePlansMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePlansMutationKeySpecifier | (() => undefined | DeletePlansMutationKeySpecifier),
		fields?: DeletePlansMutationFieldPolicy,
	},
	DescriptorPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DescriptorPaginationKeySpecifier | (() => undefined | DescriptorPaginationKeySpecifier),
		fields?: DescriptorPaginationFieldPolicy,
	},
	DescriptorType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DescriptorTypeKeySpecifier | (() => undefined | DescriptorTypeKeySpecifier),
		fields?: DescriptorTypeFieldPolicy,
	},
	ExecuteContactUsMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExecuteContactUsMutationKeySpecifier | (() => undefined | ExecuteContactUsMutationKeySpecifier),
		fields?: ExecuteContactUsMutationFieldPolicy,
	},
	IncomingStatsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncomingStatsTypeKeySpecifier | (() => undefined | IncomingStatsTypeKeySpecifier),
		fields?: IncomingStatsTypeFieldPolicy,
	},
	LoginMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginMutationKeySpecifier | (() => undefined | LoginMutationKeySpecifier),
		fields?: LoginMutationFieldPolicy,
	},
	MeType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MeTypeKeySpecifier | (() => undefined | MeTypeKeySpecifier),
		fields?: MeTypeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PlanPriceType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlanPriceTypeKeySpecifier | (() => undefined | PlanPriceTypeKeySpecifier),
		fields?: PlanPriceTypeFieldPolicy,
	},
	PlansType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlansTypeKeySpecifier | (() => undefined | PlansTypeKeySpecifier),
		fields?: PlansTypeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RefreshToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefreshTokenKeySpecifier | (() => undefined | RefreshTokenKeySpecifier),
		fields?: RefreshTokenFieldPolicy,
	},
	Register?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterKeySpecifier | (() => undefined | RegisterKeySpecifier),
		fields?: RegisterFieldPolicy,
	},
	RemarkType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RemarkTypeKeySpecifier | (() => undefined | RemarkTypeKeySpecifier),
		fields?: RemarkTypeFieldPolicy,
	},
	ResendActivationEmailMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResendActivationEmailMutationKeySpecifier | (() => undefined | ResendActivationEmailMutationKeySpecifier),
		fields?: ResendActivationEmailMutationFieldPolicy,
	},
	ResolveAlertsMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResolveAlertsMutationKeySpecifier | (() => undefined | ResolveAlertsMutationKeySpecifier),
		fields?: ResolveAlertsMutationFieldPolicy,
	},
	RevokeToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeTokenKeySpecifier | (() => undefined | RevokeTokenKeySpecifier),
		fields?: RevokeTokenFieldPolicy,
	},
	SendResetPasswordEmailMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendResetPasswordEmailMutationKeySpecifier | (() => undefined | SendResetPasswordEmailMutationKeySpecifier),
		fields?: SendResetPasswordEmailMutationFieldPolicy,
	},
	StarringAlertMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StarringAlertMutationKeySpecifier | (() => undefined | StarringAlertMutationKeySpecifier),
		fields?: StarringAlertMutationFieldPolicy,
	},
	StatsDayType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatsDayTypeKeySpecifier | (() => undefined | StatsDayTypeKeySpecifier),
		fields?: StatsDayTypeFieldPolicy,
	},
	StatsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatsTypeKeySpecifier | (() => undefined | StatsTypeKeySpecifier),
		fields?: StatsTypeFieldPolicy,
	},
	SubscribeNotificationMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribeNotificationMutationKeySpecifier | (() => undefined | SubscribeNotificationMutationKeySpecifier),
		fields?: SubscribeNotificationMutationFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	TokenLoginMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenLoginMutationKeySpecifier | (() => undefined | TokenLoginMutationKeySpecifier),
		fields?: TokenLoginMutationFieldPolicy,
	},
	UpdateAccountMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateAccountMutationKeySpecifier | (() => undefined | UpdateAccountMutationKeySpecifier),
		fields?: UpdateAccountMutationFieldPolicy,
	},
	UpdatePlansMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePlansMutationKeySpecifier | (() => undefined | UpdatePlansMutationKeySpecifier),
		fields?: UpdatePlansMutationFieldPolicy,
	},
	UpdateProfilePic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProfilePicKeySpecifier | (() => undefined | UpdateProfilePicKeySpecifier),
		fields?: UpdateProfilePicFieldPolicy,
	},
	UpdateRemarkMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateRemarkMutationKeySpecifier | (() => undefined | UpdateRemarkMutationKeySpecifier),
		fields?: UpdateRemarkMutationFieldPolicy,
	},
	UserNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserNodeKeySpecifier | (() => undefined | UserNodeKeySpecifier),
		fields?: UserNodeFieldPolicy,
	},
	UserNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserNodeConnectionKeySpecifier | (() => undefined | UserNodeConnectionKeySpecifier),
		fields?: UserNodeConnectionFieldPolicy,
	},
	UserNodeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserNodeEdgeKeySpecifier | (() => undefined | UserNodeEdgeKeySpecifier),
		fields?: UserNodeEdgeFieldPolicy,
	},
	UserType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTypeKeySpecifier | (() => undefined | UserTypeKeySpecifier),
		fields?: UserTypeFieldPolicy,
	},
	VerifyAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyAccountKeySpecifier | (() => undefined | VerifyAccountKeySpecifier),
		fields?: VerifyAccountFieldPolicy,
	},
	VerifyCurrentPasswordMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VerifyCurrentPasswordMutationKeySpecifier | (() => undefined | VerifyCurrentPasswordMutationKeySpecifier),
		fields?: VerifyCurrentPasswordMutationFieldPolicy,
	},
	name?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | nameKeySpecifier | (() => undefined | nameKeySpecifier),
		fields?: nameFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;