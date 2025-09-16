import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./container/Home/index";
import Doctor from "./container/doctors-list/index";
import Patient from "./container/patient/index";
import Doctordashboard from './container/doctor-dashboard/index'
import Patientdashboard from './container/patient-dashboard/index'
import AddDoctor from "./container/adddoctor/index";
import DoctorSchedule from "./container/doctorschedule";
import Specializations from  './container/specializations-doctor'
import Appointments from './container/appointments/index'
import AddAppointment from "./container/AddAppointment/index";
import Calendarview from './container/calendarview'
import Appointmentrequests from './container/appointment-requests'
import Prescriptions  from './container/Prescriptions/All'
import  CreatePrescriptions from './container/Prescriptions/create'
import Templates from './container/Prescriptions/templates'
import Ambulance from './container/Ambulance/ambulance'
import AmbulanceList from "./container/Ambulance/list";
import Available from "./container/Ambulance/Available";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/doctor-dashboard" element={<Doctordashboard />} /> 
              <Route path="/patient-dashboard" element={<Patientdashboard/>} />
          
          {/* Doctors */}
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctors-list" element={<Doctor />} /> 
            <Route path="/adddoctor" element={<AddDoctor />} /> 
           <Route path="/doctorschedule" element={<DoctorSchedule />} />
            <Route path="/specializations-doctor" element={<Specializations />} />

             {/* patient */}
          <Route path="/patient" element={<Patient />} />
            {/* Appointments */}
         <Route path="/appointments" element={<Appointments />} />  
         <Route path="/AddAppointment" element={< AddAppointment />} /> 
          <Route path="/calendarview" element={<Calendarview />} /> 
           <Route path="/appointment-requests" element={<Appointmentrequests />} />
           {/* Prescriptions */}
            <Route path="/All" element={<Prescriptions  />} />
            <Route path="/create" element={<CreatePrescriptions  />} />
           <Route path="/templates" element={<Templates />} />
           {/* Ambulance */}
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/list" element={<AmbulanceList />} />
            <Route path="/Available" element={<Available />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
