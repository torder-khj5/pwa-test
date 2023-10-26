// types/RoutePath.ts

type RoutePath =
  | '/'
  | '/signup'
  | '/service'
  | '/notice'
  | '/notice/:id'
  | '/faq'
  | '/setting'
  | '/notificationMessage'
  | '/account'
  | '/accountDelete'
  | '/accountDelete/report'
  | '/business'
  | '/business/company'
  | `/business/company/${string}`
  | '/business/manager'
  | '/login'
  | '/event'
  | `/event/${string}`
  | '/cert'
  | '/find/id';

export default RoutePath;
