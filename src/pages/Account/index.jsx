import { useState, useCallback } from "react";
import { LuPencil, LuChevronDown, LuChevronUp, LuCheck } from "react-icons/lu";

// ─── Toast ────────────────────────────────────────────────────────────────────

function useToast() {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3000
    );
  }, []);

  return { toasts, show };
}

function ToastContainer({ toasts }) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-2.5 bg-textHeader text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg animate-fade-in-up"
        >
          <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
            <LuCheck className="text-white text-xs" />
          </span>
          {t.message}
        </div>
      ))}
    </div>
  );
}

// ─── Reusable Fields ──────────────────────────────────────────────────────────

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  readOnly,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-textParagraph font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className="w-full border border-borderLight rounded-xl px-3 py-4 text-sm text-textHeader placeholder:text-textBody bg-backgroundSecondary outline-none focus:border-primary focus:ring-1 focus:ring-primaryLight transition-all"
      />
    </div>
  );
}

function SelectField({ label, options, value, onChange, placeholder }) {
  const isPlaceholder = placeholder && value === placeholder;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-textParagraph font-medium">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`w-full appearance-none border border-borderLight rounded-xl px-3 py-4 text-sm bg-backgroundSecondary outline-none focus:border-primary focus:ring-1 focus:ring-primaryLight transition-all cursor-pointer ${
            isPlaceholder ? "text-textBody" : "text-textHeader"
          }`}
        >
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <LuChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-textBody pointer-events-none text-base" />
      </div>
    </div>
  );
}

function SaveButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-2 inline-flex w-fit items-center justify-center rounded-xl bg-primary p-4 text-sm font-medium text-white transition-colors hover:bg-primaryDarker"
    >
      Save Preferences
    </button>
  );
}

// ─── Avatar ──────────────────────────────────────────────────────────────────

function AvatarSection() {
  return (
    <section className="bg-background border border-borderLight rounded-2xl p-6">
      <h2 className="text-base font-semibold text-textHeader">Avatar</h2>
      <p className="text-sm text-textBody mt-0.5">Edit your profile picture</p>

      <div className="flex items-center gap-4 mt-5">
        <div className="relative w-fit">
          <div className="w-14 h-14 rounded-full bg-backgroundTertiary text-[#000000] flex items-center justify-center font-semibold text-lg select-none">
            JA
          </div>
          <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-backgroundSecondary flex items-center justify-center hover:bg-backgroundTertiary transition-colors">
            <LuPencil className="text-[11px] text-textParagraph" />
          </button>
        </div>
        <p className="text-sm text-textBody">
          Profile picture is optional and not required for contracts
        </p>
      </div>
    </section>
  );
}

// ─── Personal Information ─────────────────────────────────────────────────────

function PersonalInformationSection({ onSave }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handle = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section className="bg-background border border-borderLight rounded-2xl p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-base font-semibold text-textHeader">
          Personal Information
        </h2>
        <p className="text-sm text-textBody mt-0.5">
          Used across your contracts and shared documents
        </p>
      </div>
      <Field
        label="Full Name"
        placeholder="e.g John Doe"
        value={form.fullName}
        onChange={handle("fullName")}
      />
      <Field
        label="Email"
        type="email"
        placeholder="user@example.com"
        value={form.email}
        onChange={handle("email")}
      />
      <Field
        label="Phone Number (Optional)"
        placeholder="+234 9087654321"
        value={form.phone}
        onChange={handle("phone")}
      />
      <SaveButton onClick={() => onSave("Personal information saved")} />
    </section>
  );
}

// ─── Business Information ─────────────────────────────────────────────────────

const COUNTRIES = [
  "Select your country",
  "Nigeria",
  "United Kingdom",
  "United States",
  "Canada",
  "Ghana",
  "South Africa",
];

const TIMEZONES = [
  "Select your timezone",
  "West African Time (GMT+1)",
  "Greenwich Mean Time (GMT+0)",
  "Central European Time (GMT+2)",
  "Eastern Time (GMT-5)",
  "Pacific Time (GMT-8)",
];

function BusinessInformationSection({ onSave }) {
  const [form, setForm] = useState({
    businessName: "",
    role: "",
    country: "Select your country",
    timezone: "Select your timezone",
  });

  const handle = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section className="bg-background border border-borderLight rounded-2xl p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-base font-semibold text-textHeader">
          Business Information
        </h2>
        <p className="text-sm text-textBody mt-0.5">
          Optional details to appear on your contracts
        </p>
      </div>
      <Field
        label="Business Name"
        placeholder="e.g John Doe"
        value={form.businessName}
        onChange={handle("businessName")}
      />
      <Field
        label="Role / Profession"
        placeholder="e.g Freelancer Designer"
        value={form.role}
        onChange={handle("role")}
      />
      <div className="grid grid-cols-2 gap-4">
        <SelectField
          label="Country"
          options={COUNTRIES}
          value={form.country}
          onChange={handle("country")}
          placeholder="Select your country"
        />
        <SelectField
          label="Time Zone"
          options={TIMEZONES}
          value={form.timezone}
          onChange={handle("timezone")}
          placeholder="Select your timezone"
        />
      </div>
      <SaveButton onClick={() => onSave("Business information saved")} />
    </section>
  );
}

// ─── Contract Preferences ────────────────────────────────────────────────────

const TONES = ["Professional", "Friendly", "Strict"];
const CURRENCIES = [
  { label: "₦", title: "Nigerian Naira" },
  { label: "€", title: "Euro" },
  { label: "$", title: "US Dollar" },
  { label: "£", title: "British Pound" },
];
const PAYMENT_STRUCTURES = [
  "Fixed Price",
  "Hourly Rate",
  "Milestone-Based",
  "Retainer",
];

function ContractPreferencesSection({ onSave }) {
  const [tone, setTone] = useState("Professional");
  const [currency, setCurrency] = useState("₦");
  const [paymentStructure, setPaymentStructure] = useState("Fixed Price");
  const [noticePeriod, setNoticePeriod] = useState("14 days");

  return (
    <section className="bg-background border border-borderLight rounded-2xl p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-textHeader">
          Contract Preferences
        </h2>
        <p className="text-sm text-textBody mt-0.5">
          Default settings for new contracts
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-textParagraph font-medium">
          Default Contract Tone
        </span>
        <div className="flex gap-2">
          {TONES.map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              className={`px-4 py-2 w-fit rounded-lg text-sm font-medium border transition-colors ${
                tone === t
                  ? "bg-[#EBFAF2] text-primary border-primary"
                  : "bg-backgroundTertiary text-textBody border-borderLight hover:border-primary hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-textParagraph font-medium">
          Default Currency
        </span>
        <div className="flex gap-2">
          {CURRENCIES.map((c) => (
            <button
              key={c.label}
              title={c.title}
              onClick={() => setCurrency(c.label)}
              className={`px-4 py-2 w-fit rounded-lg text-sm font-semibold border transition-colors ${
                currency === c.label
                  ? "bg-[#EBFAF2] text-primary border-primary"
                  : "bg-backgroundTertiary text-textBody border-borderLight hover:border-primary hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <SelectField
        label="Default Payment Structure"
        options={PAYMENT_STRUCTURES}
        value={paymentStructure}
        onChange={(e) => setPaymentStructure(e.target.value)}
      />

      <Field
        label="Termination Notice Period"
        value={noticePeriod}
        onChange={(e) => setNoticePeriod(e.target.value)}
      />

      <SaveButton onClick={() => onSave("Contract preferences saved")} />
    </section>
  );
}

// ─── Legal Information ────────────────────────────────────────────────────────

const JURISDICTIONS = [
  "Select jurisdiction",
  "Nigeria — Federal Law",
  "United Kingdom — English Law",
  "United States — Delaware Law",
  "Canada — Ontario Law",
  "South Africa — South African Law",
];

function LegalInformationSection({ onSave }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    legalName: "",
    tin: "",
    vat: "",
    address: "",
    jurisdiction: "Select jurisdiction",
    disputeResolution: "",
  });

  const handle = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section className="bg-background border border-borderLight rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-backgroundSecondary transition-colors"
      >
        <div className="text-left">
          <h2 className="text-base font-semibold text-textHeader">
            Legal Information
          </h2>
          <p className="text-sm text-textBody mt-0.5">
            Included only when required
          </p>
        </div>
        {open ? (
          <LuChevronUp className="text-textBody text-xl shrink-0" />
        ) : (
          <LuChevronDown className="text-textBody text-xl shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-6 flex flex-col gap-5 border-t border-borderLight">
          <p className="text-sm text-textBody pt-4">
            This information is appended to contracts only when legally relevant
            to your jurisdiction. Keep it accurate to ensure your contracts
            remain enforceable.
          </p>
          <Field
            label="Legal / Registered Business Name"
            placeholder="e.g Doe Ventures Ltd."
            value={form.legalName}
            onChange={handle("legalName")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Tax Identification Number (TIN)"
              placeholder="e.g 12345678-0001"
              value={form.tin}
              onChange={handle("tin")}
            />
            <Field
              label="VAT / GST Number (if applicable)"
              placeholder="e.g NG-VAT-00123"
              value={form.vat}
              onChange={handle("vat")}
            />
          </div>
          <Field
            label="Registered Business Address"
            placeholder="e.g 12 Commerce Street, Lagos, Nigeria"
            value={form.address}
            onChange={handle("address")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField
              label="Governing Law (Jurisdiction)"
              options={JURISDICTIONS}
              value={form.jurisdiction}
              onChange={handle("jurisdiction")}
              placeholder="Select jurisdiction"
            />
            <Field
              label="Dispute Resolution Clause"
              placeholder="e.g Arbitration via Lagos Court"
              value={form.disputeResolution}
              onChange={handle("disputeResolution")}
            />
          </div>
          <SaveButton onClick={() => onSave("Legal information saved")} />
        </div>
      )}
    </section>
  );
}

// ─── Security ─────────────────────────────────────────────────────────────────

function SecuritySection({ onSave }) {
  const [twoFa, setTwoFa] = useState(true);

  return (
    <section className="bg-background border border-borderLight rounded-2xl p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-textHeader">Security</h2>
        <p className="text-sm text-textBody mt-0.5">
          Manage your account security
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-textParagraph font-medium">
          Password
        </label>
        <div className="flex gap-3">
          <input
            type="password"
            value="password123"
            readOnly
            className="flex-1 border border-borderLight rounded-xl px-3 py-4 text-sm text-textHeader bg-backgroundSecondary outline-none"
          />
          <button className="p-4 w-fit rounded-xl border border-borderLight text-sm font-medium text-textParagraph hover:bg-backgroundSecondary transition-colors">
            Change
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-textHeader">
            Two-factor Authentication
          </p>
          <p className="text-sm text-textBody mt-0.5">
            Secure your account with 2FA
          </p>
        </div>
        <button
          onClick={() => {
            onSave(twoFa ? "2FA disabled" : "2FA enabled");
            setTwoFa((v) => !v);
          }}
          className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors shrink-0 ${
            twoFa ? "bg-primary" : "bg-backgroundTertiary"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
              twoFa ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Account() {
  const { toasts, show } = useToast();

  return (
    <div className="px-8 py-6 flex flex-col gap-6 bg-backgroundSecondary min-h-screen">
      <h1 className="text-xl font-semibold text-textHeader">User Profile</h1>
      <AvatarSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PersonalInformationSection onSave={show} />
        <BusinessInformationSection onSave={show} />
      </div>
      <ContractPreferencesSection onSave={show} />
      <LegalInformationSection onSave={show} />
      <SecuritySection onSave={show} />
      <ToastContainer toasts={toasts} />
    </div>
  );
}
