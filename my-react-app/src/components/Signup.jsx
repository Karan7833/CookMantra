import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Default export React component. TailwindCSS classes used for styling.
// Features:
// - Responsive card layout
// - Name, Email, Password, Confirm Password, Avatar upload
// - Password show/hide toggle + strength meter
// - Client-side validation + inline errors
// - Subtle animations via framer-motion
// - Accessible labels and focus states

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", avatar: null, terms: false });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pwStrength, setPwStrength] = useState(0);

  useEffect(() => {
    setPwStrength(calcPasswordStrength(form.password));
  }, [form.password]);

  function calcPasswordStrength(pw) {
    // returns 0..4
    let strength = 0;
    if (pw.length >= 8) strength++;
    if (/[A-Z]/.test(pw)) strength++;
    if (/[0-9]/.test(pw)) strength++;
    if (/[^A-Za-z0-9]/.test(pw)) strength++;
    return strength;
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    if (!form.confirm) e.confirm = "Please confirm your password";
    else if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    if (!form.terms) e.terms = "You must accept the terms";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setErrors({});
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    try {
      // Simulate network request (replace with real API call)
      await new Promise((r) => setTimeout(r, 900));

      // Example: prepare formData if uploading avatar
      // const payload = new FormData();
      // payload.append('name', form.name);
      // payload.append('email', form.email);
      // payload.append('password', form.password);
      // if (form.avatar) payload.append('avatar', form.avatar);
      // await fetch('/api/signup', { method: 'POST', body: payload });

      setSuccess(true);
      setForm({ name: "", email: "", password: "", confirm: "", avatar: null, terms: false });
    } catch (err) {
      setErrors({ submit: "Something went wrong. Try again." });
    } finally {
      setSubmitting(false);
    }
  }

  function onFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    // basic validation
    if (!file.type.startsWith("image/")) {
      setErrors((s) => ({ ...s, avatar: "Upload a valid image." }));
      return;
    }
    setForm((s) => ({ ...s, avatar: file }));
    setErrors((s) => ({ ...s, avatar: undefined }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-3xl bg-white  shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left - Decorative / Info */}
        <div className="p-8 hidden md:flex flex-col justify-center gap-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <h2 className="text-3xl font-extrabold">Create your account</h2>
          <p className="opacity-90">Join us — create an account to save your progress and access exclusive features.</p>
          <ul className="mt-4 space-y-2 text-sm opacity-95">
            <li>• Fast and secure authentication</li>
            <li>• Upload profile picture</li>
            <li>• Manage settings and preferences</li>
          </ul>
        </div>

        {/* Right - Form */}
        <div className="p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-semibold">Sign up</h3>

            {/* Name */}
            <label className="block">
              <span className="text-sm">Full name</span>
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className={`mt-1 block w-full rounded-xl border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-700 dark:focus:ring-indigo-500 ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                placeholder="Your full name"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-sm">Email address</span>
              <input
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                className={`mt-1 block w-full rounded-xl border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-700 ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                placeholder="name@example.com"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </label>

            {/* Password row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm">Password</span>
                <div className="relative mt-1">
                  <input
                    value={form.password}
                    onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                    className={`block w-full rounded-xl border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-700 ${errors.password ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="Minimum 8 characters"
                    type={showPassword ? 'text' : 'password'}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded-md opacity-80"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}

                {/* Strength meter */}
                <div className="mt-2">
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden dark:bg-slate-700">
                    <div
                      style={{ width: `${(pwStrength / 4) * 100}%` }}
                      className={`h-2 rounded-full transition-all duration-300 ${pwStrength <= 1 ? 'bg-red-400' : pwStrength === 2 ? 'bg-yellow-400' : pwStrength === 3 ? 'bg-emerald-400' : 'bg-indigo-500'}`}
                    />
                  </div>
                  <p className="text-xs mt-1 opacity-80">Password strength: {['Very weak','Weak','Okay','Strong','Very strong'][pwStrength]}</p>
                </div>
              </label>

              <label className="block">
                <span className="text-sm">Confirm password</span>
                <input
                  value={form.confirm}
                  onChange={(e) => setForm((s) => ({ ...s, confirm: e.target.value }))}
                  className={`mt-1 block w-full rounded-xl border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-700 ${errors.confirm ? 'border-red-400' : 'border-slate-200'}`}
                  placeholder="Re-enter password"
                  type={showPassword ? 'text' : 'password'}
                  aria-invalid={errors.confirm ? "true" : "false"}
                />
                {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
              </label>
            </div>

            {/* Avatar upload */}
            <label className="block">
              <span className="text-sm">Profile photo (optional)</span>
              <div className="mt-1 flex items-center gap-3">
                <input type="file" accept="image/*" onChange={onFileChange} />
                {form.avatar && <span className="text-sm opacity-80">{form.avatar.name}</span>}
              </div>
              {errors.avatar && <p className="text-xs text-red-500 mt-1">{errors.avatar}</p>}
            </label>

            {/* Terms */}
            <label className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                checked={form.terms}
                onChange={(e) => setForm((s) => ({ ...s, terms: e.target.checked }))}
                className="mt-1 accent-indigo-500"
              />
              <div className="text-sm">
                <div>I agree to the <a href="#" className="underline">terms and conditions</a></div>
                {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
              </div>
            </label>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl py-2 px-4 bg-indigo-600 text-white font-medium shadow hover:shadow-lg disabled:opacity-60"
              >
                {submitting ? 'Creating account...' : 'Create account'}
              </button>
              {errors.submit && <p className="text-xs text-red-500 mt-2">{errors.submit}</p>}
            </div>

            {/* Success message */}
            {success && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-3 text-sm">
                Account created successfully! You can now login.
              </motion.div>
            )}

            <p className="text-xs opacity-80 mt-2">Already have an account? Log in</p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
