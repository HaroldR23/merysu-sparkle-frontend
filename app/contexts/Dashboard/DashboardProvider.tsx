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
    setClientsLoading(true);
    try {
      const data = await fetchClientsService();
      setClients(data.clients);
      _setClientMetrics(data.metrics);
    } catch (error) {
      setClientsError(error instanceof Error ? error.message : 'Failed to refresh clients');
    } finally {
      setClientsLoading(false);
    }
  }, []);

  // Create Client
  const createClient = useCallback(async (clientData: CreateClientData) => {
    try {
      const newClient = await createClientService(clientData);
      setClients(prev => [...prev, newClient]);
      _setClientMetrics(prev => prev ? {
        ...prev,
        totalClients: prev.totalClients + 1,
        totalBilling: prev.totalBilling + newClient.totalBilling,
        totalServices: prev.totalServices + newClient.totalServices,
        averageBillingPerClient: (prev.totalBilling + newClient.totalBilling) / (prev.totalClients + 1),
      } : null);
    } catch (error) {
      throw error;
    }
  }, []);


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
    setEmployeesLoading(true);
    try {
      const data = await fetchEmployeesService();
      setEmployees(data.employees);
      _setEmployeeMetrics(data.metrics);
    } catch (error) {
      setEmployeesError(error instanceof Error ? error.message : 'Failed to refresh employees');
    } finally {
      setEmployeesLoading(false);
    }
  }, []);

  // Create Employee
  const createEmployee = useCallback(async (employeeData: CreateEmployeeData) => {
    try {
      const newEmployee = await createEmployeeService(employeeData);
      setEmployees(prev => [...prev, newEmployee]);
    } catch (error) {
      throw error;
    }
  }, []);

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
    setServicesLoading(true);
    try {
      const data = await fetchServicesService();
      setServices(data);
    } catch (error) {
      setServicesError(error instanceof Error ? error.message : 'Failed to refresh services');
    } finally {
      setServicesLoading(false);
    }
  }, []);

  // Create Service
  const createService = useCallback(async (serviceData: CreateServiceData) => {
    try {
      const newService = await createServiceService(serviceData);
      setServices(prev => [...prev, { ...newService, employeeNames: serviceData.employeeIds.map(id => {
        const employee = employees.find(e => e.id === id);
        return employee ? employee.name : '';
      }) } ]);
    } catch (error) {
      throw error;
    }
  }, []);

 

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
