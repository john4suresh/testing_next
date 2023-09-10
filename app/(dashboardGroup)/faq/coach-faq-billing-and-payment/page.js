export default function BillingAndPayments() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="mt-10 text-center text-[34px] text-navy">
        Coach Billing and Payment, Referrals and Contract
      </h1>
      <div className="flex flex-col p-8">
        <h3 className="text-xl">Coaching Billing and Payment:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          All coaching sessions are tracked within the Skillsoft Coaching
          dashboard and Skillsoft Coaching billing runs payments on the first of
          each month. Coaches do not need to send invoices to Skillsoft
          Coaching. Payment records, organized by month, are at the top of the
          coach dashboard and can be downloaded. We also encourage coaches to
          track their calls separately to make sure it aligns with the call
          summary in Skillsoft Coaching. Once the payments are approved, payment
          will be distributed to the coaches selected bank account within 3-5
          business days. If you have any questions, please send email to
          billing@pluma.co.
        </p>
        <h3 className="mt-4 text-xl">Referrals:</h3>
        <div className="mb-4 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              Coach referrals – we pay coaches $25 per coach referral if we end
              up accepting a coach you’ve recommended to be a Pluma coach. So
              please, introduce us!
            </li>
            <li>
              Enterprise referrals – please get in touch with us to refer any
              enterprise customers. We’ll work closely with you to make sure the
              terms work.
            </li>
          </ul>
        </div>
        <h3 className="mt-4 text-xl">Contact information:</h3>
        <div className="mb-4 text-base text-gray-veryDark">
          <ul className="ml-4 list-disc">
            <li>
              For all coach-related issues and questions: coaches@pluma.co
            </li>
            <li>
              Please don’t hesitate to reach out with any questions or comments.
            </li>
          </ul>
        </div>
        <h3 className="mt-4 text-xl">Contracts:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          You have signed two Pluma documents, the Nondisclosure and Development
          Agreement and a Pluma Coach Consultant Agreement. From time-to-time we
          may update or amend these documents and we will share any revisions
          with you for your review in a timely fashion.
        </p>
      </div>
    </div>
  );
}
