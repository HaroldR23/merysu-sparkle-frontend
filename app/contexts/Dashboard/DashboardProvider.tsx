"use client"

import { useState, useCallback } from "react";
import { DashboardContext } from "./DashboardContext";
import { 
  Service, 
  Employee, 
  CreateServiceData,
  EmployeeMetrics
} from "../models";
import { fetchServicesService } from "../../services/fetchServicesService";
import { createServiceService } from "../../services/createServiceService";
import { fetchEmployeesService } from "../../services/fetchEmployeesService";
import { createEmployeeService, CreateEmployeeData } from "../../services/createEmployeeService";

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  // Services State
  const [services, setServices] = useState<Service[]>([]);
  const [servicesLoading, setServicesLoading] = useState<boolean>(false);
  const [servicesError, setServicesError] = useState<string | null>(null);

  // Employees State
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeMetrics, _setEmployeeMetrics] = useState<EmployeeMetrics | null>(null);
  const [employeesLoading, setEmployeesLoading] = useState<boolean>(false);
  const [employeesError, setEmployeesError] = useState<string | null>(null);

  // Fetch Services
  const fetchServices = useCallback(async () => {
    if (servicesLoading) return; // Prevent duplicate calls
    
    setServicesLoading(true);
    setServicesError(null);
    try {
      const data = await fetchServicesService();
      console.log("Servicios obtenidos del servicio:", data); // Debug: Ver servicios obtenidos
      setServices(data);
    } catch (error) {
      setServicesError(error instanceof Error ? error.message : 'Failed to fetch services');
    } finally {
      setServicesLoading(false);
    }
  }, [servicesLoading]);

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
      setServices(prev => [...prev, newService]);
    } catch (error) {
      throw error;
    }
  }, []);

 
  // Fetch Employees
  const fetchEmployees = useCallback(async () => {
    if (employeesLoading) return; // Prevent duplicate calls
    
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
    }
  }, [employeesLoading]);

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

 

  return (
    <DashboardContext.Provider 
      value={{
        // Services
        services,
        servicesLoading,
        servicesError,
        fetchServices,
        refreshServices,
        createService,

        // Employees
        employees,
        employeesLoading,
        employeesError,
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
