import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const Home = () => {
  const links = [
    {
      title: "Add Residents",
    },
    {
      title: "Add core-workers",
    },
    {
      title: "Add family members",
    },
  ];

  return (
    <div className="text-greyText flex flex-col items-center justify-center gap-y-8 lg:py-16 py-8 font-medium">
      <h1 className="text-[48px] text-center">Welcome to Tea Time</h1>
      <div>
        <Image src="/images/logo.png" width={190} height={190} />
      </div>
      <p className="text-sm">Lets take your care management journey forward</p>
      <ul className="flex flex-col gap-y-4 sm:mr-32">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href="/dashboard/home"
              className="w-full flex items-start gap-x-4 text-[1.5rem] text-left"
            >
              <FiCheckCircle />
              <h3 className="text-sm underline">{link.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
