interface MedicalConditionsProps {
  conditions: string[];
  onChange: (conditions: string[]) => void;
}

const CONDITIONS = [
  'PCOS',
  'Endometriosis',
  'Low Ovarian Reserve',
  'Male Factor Infertility',
];

export function MedicalConditions({ conditions, onChange }: MedicalConditionsProps) {
  const toggleCondition = (condition: string) => {
    if (conditions.includes(condition)) {
      onChange(conditions.filter((c) => c !== condition));
    } else {
      onChange([...conditions, condition]);
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        Do you have any of these medical conditions?
      </h2>
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {CONDITIONS.map((condition) => (
          <label
            key={condition}
            className={`flex items-center p-4 rounded-xl cursor-pointer transition-all`}
          >
            <input
              type="checkbox"
              checked={conditions.includes(condition)}
              onChange={() => toggleCondition(condition)}
              className="w-5 h-5 text-red-500 border-gray-300 rounded focus:ring-red-500 accent-red-500 "
            />
            <span className={`ml-3 ${
              conditions.includes(condition) ? 'text-red-900' : 'text-gray-700'
            }`}>
              {condition}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}