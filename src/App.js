import React, { useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OTPScreen from './pages/OTPScreen'
import DashboardLayout from './layouts/DashboardLayout'
import SetNewPassword from './pages/SetNewPassword'
import ForgotPassword from './pages/ForgetPassword'
import Roles from './pages/Roles/Roles'
import Users from './pages/Users/Users'
import Books from './pages/Books/Books'
import Categories from './pages/Categories/Categories'
import VendorManagement from './pages/Vendors/VendorManagement'
import PaymentSuccess from './pages/Payment/PaymentSuccess'
import PaymentError from './pages/Payment/PaymentError'
import Transactions from './pages/Transactions/Transactions'
import SubscriptionGuides from './pages/Vendors/SubscriptionGuides'
import PdfViewer from './pages/Vendors/PdfViewer'
import ContractExpired from './pages/Vendors/SubscriptionExpire'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/subscription-expired" element={<ContractExpired />} />
        <Route path="/subscription-guides/:id" element={<SubscriptionGuides />} />
        <Route path="/view-content/:encryptedPdfUrl" element={<PdfViewer />} />
        <Route path="/payment/cancel" element={<PaymentError />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route element={<DashboardLayout />}>
          <Route path="/roles" element={<Roles />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/vendors" element={<VendorManagement />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/users" element={<Users />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
