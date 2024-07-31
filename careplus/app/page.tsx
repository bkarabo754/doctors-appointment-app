import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/icons/tontrac.png'
            height={1000}
            width={1000}
            alt='patient'
            className='mb-12 h-10 w-fit'
          />

          <PatientForm />

          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items text-dark-600 xl:text-left'>
              Copyright © 2024 TonTrac Pulse
            </p>
            <Link href='/?admin=true' className='text-orange-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/tontrac-onboarding.png'
        height={1000}
        width={1000}
        alt='patient'
        className='side-img max-w-[50%]'
      />
    </div>
  );
}
