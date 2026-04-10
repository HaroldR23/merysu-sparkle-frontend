"use client"

import { useState, useCallback } from "react";
import { DashboardContext } from "./DashboardContext";
import { 
  Service, 
  Employee, 
  CreateServiceData,
  EmployeeMetrics,
  CreateEmployeeData,
  Client,
  ClientMetrics,
  CreateClientData
} from "../models";
import { fetchServicesService } from "../../services/fetchServicesService";
import { createServiceService } from "../../services/createServiceService";
import { fetchEmployeesService } from "../../services/fetchEmployeesService";
import { createEmployeeService } from "../../services/createEmployeeService";
import { fetchClientsService } from "@/app/services/fetchClientsService";
import { createClientService } from "@/app/services/createClientService";

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  // Services State
  const [services, setServices] = useState<Service[]>([]);
  const [servicesLoading, setServicesLoading] = useState<boolean>(false);
  const [servicesError, setServicesError] = useState<string | null>(null);
  const [servicesHasFetched, setServicesHasFetched] = useState<boolean>(false);

  // Clients State
  const [clients, setClients] = useState<Client[]>([]);
  const [clientsLoading, setClientsLoading] = useState<boolean>(false);
  const [clientsError, setClientsError] = useState<string | null>(null);
  const [clientsHasFetched, setClientsHasFetched] = useState<boolean>(false);
  const [clientMetrics, _setClientMetrics] = useState<ClientMetrics | null>(null);

  // Employees State
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeMetrics, _setEmployeeMetrics] = useState<EmployeeMetrics | null>(null);
  const [employeesLoading, setEmployeesLoading] = useState<boolean>(false);
  const [employeesError, setEmployeesError] = useState<string | null>(null);
  const [employeesHasFetched, setEmployeesHasFetched] = useState<boolean>(false);

  // Fetch Clients
  const fetchClients = useCallback(async () => {
    if (clientsHasFetched || clientsLoading) return;
    
    setClientsLoading(true);
    setClientsError(null);
    try {
      const data = await fetchClientsService();
      setClients(data.clients);
      _setClientMetrics(data.metrics);
    } catch (error) {
      setClientsError(error instanceof Error ? error.message : 'Failed to fetch clients');
    } finally {
      setClientsLoading(false);
      setClientsHasFetched(true);
    }
  }, [clientsHasFetched, clientsLoading]);

  // Refresh Clients
  const refreshClients = useCallback(async () => {
    setClientsError(null);
    try {
      const data = await fetchClientsService();
      setClients(data.clients);
      _setClientMetrics(data.metrics);
    } catch (error) {
      setClientsError(error instanceof Error ? error.message : 'Failed to refresh clients');
    }
  }, []);

  // Create Client
  const createClient = useCallback(async (clientData: CreateClientData) => {
    await createClientService(clientData);
    await refreshClients();
  }, [refreshClients]);


  // Fetch Employees
  const fetchEmployees = useCallback(async () => {
    if (employeesHasFetched || employeesLoading) return;
    
    setEmployeesLoading(true);
    setEmployeesError(null);
    try {
      const data = await fetchEmployeesService();
      setEmployees(data.employees);
      _setEmployeeMetrics(data.metrics);
    } catch (error) {
      setEmployeesError(error instanceof Error ? error.message : 'Failed to fetch employees');
    } finally {
      setEmployeesLoading(false);
      setEmployeesHasFetched(true);
    }
  }, [employeesHasFetched, employeesLoading]);

  // Refresh Employees
  const refreshEmployees = useCallback(async () => {
    setEmployeesError(null);
    try {
      const data = await fetchEmployeesService();
      setEmployees(data.employees);
      _setEmployeeMetrics(data.metrics);
    } catch (error) {
      setEmployeesError(error instanceof Error ? error.message : 'Failed to refresh employees');
    }
  }, []);

  // Create Employee
  const createEmployee = useCallback(async (employeeData: CreateEmployeeData) => {
    await createEmployeeService(employeeData);
    await refreshEmployees();
  }, [refreshEmployees]);

  // Fetch Services
  const fetchServices = useCallback(async () => {
    if (servicesHasFetched || servicesLoading) return;
    
    setServicesLoading(true);
    setServicesError(null);
    try {
      const [servicesData] = await Promise.all([
        fetchServicesService(),
        fetchClients(),
        fetchEmployees(),
      ]);
      setServices(servicesData);
    } catch (error) {
      setServicesError(error instanceof Error ? error.message : 'Failed to fetch services');
    } finally {
      setServicesLoading(false);
      setServicesHasFetched(true);
    }
  }, [servicesHasFetched, servicesLoading, fetchClients, fetchEmployees]);

  // Refresh Services
  const refreshServices = useCallback(async () => {
    setServicesError(null);
    try {
      const data = await fetchServicesService();
      setServices(data);
    } catch (error) {
      setServicesError(error instanceof Error ? error.message : 'Failed to refresh services');
    }
  }, []);

  // Create Service
  const createService = useCallback(async (serviceData: CreateServiceData) => {
    await createServiceService(serviceData);
    await Promise.all([refreshServices(), refreshEmployees(), refreshClients()]);
  }, [refreshServices, refreshEmployees, refreshClients]);

 

  return (
    <DashboardContext.Provider 
      value={{
        // Services
        services,
        servicesLoading,
        servicesError,
        servicesHasFetched,
        fetchServices,
        refreshServices,
        createService,

        // Clients
        clients,
        clientsLoading,
        clientsError,
        clientsHasFetched,
        clientMetrics,
        fetchClients,
        refreshClients,
        createClient,

        // Employees
        employees,
        employeesLoading,
        employeesError,
        employeesHasFetched,
        employeeMetrics,
        fetchEmployees,
        refreshEmployees,
        createEmployee,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
