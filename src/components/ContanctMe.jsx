import React from "react";

function ContanctMe() {
  return (
    <div className="bg-white py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3" dir="rtl">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                יצירת קשר
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                יש לכם שאלה, בעיה או בקשה? אנחנו כאן לעזור לכם ולספק שירות מהיר
                ומקצועי.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  שירות לקוחות
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">דואר אלקטרוני</dt>
                    <dd>
                      <a
                        href="mailto:support@pastrychef.com"
                        className="font-semibold text-indigo-600"
                      >
                        support@pastrychef.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">מספר טלפון</dt>
                    <dd className="">+9725-44962675</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">WhatsApp</dt>
                    <dd>
                      <a
                        href="https://wa.me/+972544962675?text=שלום!%20אני%20מעוניין%20לשיתוף%20פעולה%20איתכם."
                        className="font-semibold text-indigo-600"
                      >
                        שלחו לנו הודעה בוואטסאפ
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  שיתוף פעולה
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  מעוניינים בשיתוף פעולה עם העסק שלנו? נשמח לשמוע מכם ולמצוא
                  דרכים לעבוד יחד!
                </p>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">דואר אלקטרוני</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@pastrychef.com"
                        className="font-semibold text-indigo-600"
                      >
                        collaborate@pastrychef.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  הצטרפו לצוות שלנו
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  רוצים להצטרף לצוות המומחים שלנו? אנחנו תמיד מחפשים אנשים
                  מוכשרים שמחויבים לאיכות ולחדשנות.
                </p>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">דואר אלקטרוני</dt>
                    <dd>
                      <a
                        href="mailto:careers@pastrychef.com"
                        className="font-semibold text-indigo-600"
                      >
                        careers@pastrychef.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  עקבו אחרינו ברשתות החברתיות
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600">
                  תעקבו אחרי כל החדשות שלנו, המתכונים המיוחדים, והעדכונים ברשתות
                  החברתיות.
                </p>
                <dl className="mt-3 w-32 flex items-center justify-evenly gap-2">
                  {/* Facebook Button */}
                  <a
                    href="https://www.facebook.com/profile.php?id=1365789241&ref=ig_profile_ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300"
                  >
                    <svg
                      className="relative z-10 fill-gray-900 transition-all duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z" />
                    </svg>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>

                  {/* Instagram Button */}
                  <a
                    href="https://www.instagram.com/tati_cherov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white shadow-md shadow-gray-200 group transition-all duration-500"
                  >
                    <svg
                      className="fill-gray-900 relative z-10 transition-all duration-500 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2ZM7.75 4C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5ZM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5Zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm4.5-3c.83 0 1.5.67 1.5 1.5S17.33 9 16.5 9s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Z" />
                    </svg>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </a>
                </dl>
              </div>
            </div>
          </div>

          <div
            id="location"
            className="grid grid-cols-1 gap-10 pt-16 lg:grid-cols-3"
            dir="rtl"
          >
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                מיקום
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                אנו ממוקמים בבניין מגורים באזור שקט ומרוחק מהמרכז העירוני. כל
                הזמנה שנעשית באתר תוכל להיאסף אישית מהבית שלנו. פרטי המיקום
                המדויק יישלחו לכם לאחר ביצוע ההזמנה. נשמח לראות אתכם ולהציע לכם
                את הקונדיטוריה הטובה ביותר.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-2 lg:gap-8">
              <div className="sm:p-10 col-span-full">
                <div className="mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.9652088499324!2d34.59811518120476!3d31.680872890598643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15029c0669f222cd%3A0xbb13c5a006ff8cfa!2z15TXmdeV16bXqNeZ150sINeQ16nXp9ec15XXnw!5e1!3m2!1siw!2sil!4v1740954427176!5m2!1siw!2sil"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    className="border-0 overflow-x-hidden .overflow-sm-sizes"
                    title="Store Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContanctMe;
