"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, TrendingUp, Check } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  const passwordMatch = formData.password === formData.confirmPassword;
  const passwordValid = formData.password.length >= 8;

  return (
    <div className="bg-background rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl p-8">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight">Comvia</span>
            <span className="ml-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Ads</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Create your account</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Start advertising across all platforms
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="••••••••"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {formData.password && (
            <div className="mt-2 flex items-center gap-2 text-xs">
              <Check className={`w-3.5 h-3.5 ${passwordValid ? 'text-emerald-500' : 'text-gray-400'}`} />
              <span className={passwordValid ? 'text-emerald-500' : 'text-gray-400'}>
                At least 8 characters
              </span>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {formData.confirmPassword && (
            <div className="mt-2 flex items-center gap-2 text-xs">
              <Check className={`w-3.5 h-3.5 ${passwordMatch ? 'text-emerald-500' : 'text-red-500'}`} />
              <span className={passwordMatch ? 'text-emerald-500' : 'text-red-500'}>
                {passwordMatch ? 'Passwords match' : 'Passwords do not match'}
              </span>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3.5 gradient-primary text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
        >
          Create Account
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </p>

      <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="hover:underline">Terms of Service</Link>{" "}
        and{" "}
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
      </p>
    </div>
  );
}