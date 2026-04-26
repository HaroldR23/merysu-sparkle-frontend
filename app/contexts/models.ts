export enum Languages {
  ENGLISH = "english",
  SPANISH = "spanish"
}

export type LanguageOption = {
  name: Languages;
  flag: string;
}

export interface AuthUser {
  id: string;
  name: string;
  role: string;
}

// Dashboard Models

export enum ServiceStatus {
  COMPLETADO = "completado",
  PENDIENTE = "pendiente",
  CANCELADO = "cancelado"
}

export enum ServiceType {
  LIMPIEZA_RESIDENCIAL = "Limpieza residencial",
  LIMPIEZA_COMERCIAL = "Limpieza comercial",
  LIMPIEZA_POST_CONSTRUCCION = "Limpieza post-construcción",
  LIMPIEZA_PROFUNDA = "Limpieza profunda",
  LIMPIEZA_MUDANZA = "Limpieza de mudanza"
}

export enum ClientType {
  RESIDENCIAL = "residencial",
  COMERCIAL = "comercial"
}

export enum ClientStatus {
  ACTIVO = "activo",
  INACTIVO = "inactivo"
}

export interface Service {
  id: string;
  date: string;
  customerName: string;
  serviceType: string;
  employeeNames: string[];
  workedHours: number;
  chargedPrice: number;
  totalCost: number;
  margin: number;
  status: ServiceStatus;
}
export interface CreateServiceData {
  date: string;
  customerName: string;
  serviceType: string;
  chargedPrice: number;
  totalCost: number;
  startTime: string;
  endTime: string;
  customerId: string;
  employeeIds: string[];
  address: string;
  distanceKm: number;
  hourlyRate: number;
  internalNotes: string;
  workedHours: number;
}

export interface CreateClientData {
  name: string;
  type: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  status: string;
  notes: string;
  lastService: string;
}

export interface Client {
  id: string;
  name: string;
  type: ClientType;
  totalServices: number;
  totalBilling: number;
  lastService: string;
  status: ClientStatus;
  address?: string;
}

export interface ClientMetrics {
  totalClients: number;
  totalBilling: number;
  totalServices: number;
  averageBillingPerClient: number;
}

export interface ClientDashboard {
  clients: Client[];
  metrics: ClientMetrics;
}

export interface EmployeeMetrics {
  totalEmployees: number;
  totalHours: number;
  totalCost: number;
  totalServices: number;
}

export interface Employee {
  id: string;
  name: string;
  workedHours: number;
  employeeCost: number;
  servicesCount: number;
  phoneNumber: string;
  entryDate: string;
  productivity: number; 
}

export interface CreateEmployeeData {
  name: string;
  phoneNumber: string;
  hourlyRate?: number;
  entryDate: string;
  status: 'activo' | 'inactivo';
  notes: string;
}
export interface EmployeeDashboard {
  employees: Employee[];
  metrics: EmployeeMetrics;
}
export interface DashboardMetrics {
  serviciosRealizados: number;
  serviciosRealizadosChange: number;
  ingresosTotales: number;
  ingresosTotalesChange: number;
  costosTotales: number;
  costosTotalesChange: number;
  margenPromedio: number;
  margenPromedioChange: number;
  horasTrabajadas: number;
  horasTrabajadasChange: number;
}

// API State Types
export interface LoadingState {
  services: boolean;
  clients: boolean;
  employees: boolean;
  finances: boolean;
  dashboardMetrics: boolean;
}

export interface ErrorState {
  services: string | null;
  clients: string | null;
  employees: string | null;
  finances: string | null;
  dashboardMetrics: string | null;
}
