type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="
      px-6
      py-3
      rounded-xl
      bg-[#12B76A]
      text-white
      font-semibold
      hover:opacity-90
      transition
      "
    >
      {children}
    </button>
  );
}