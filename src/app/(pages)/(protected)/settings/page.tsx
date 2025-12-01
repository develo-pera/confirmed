import SettingsForm from "@/components/settings/settings-form";

const SettingsPage = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-10 md:py-20 mt-10 md:mt-20">
      <h1 className="text-2xl font-bold mb-10">Settings</h1>
      <SettingsForm />
    </div>
  );
}

export default SettingsPage;