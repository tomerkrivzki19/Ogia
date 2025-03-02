import React, { useEffect } from "react";

const faqs = [
  {
    id: 1,
    question: "איך ניתן להזמין מכם ממתקים ועוגות?",
    answer:
      "ניתן להזמין דרך האתר שלנו על ידי הוספת מוצרים לעגלה וביצוע תשלום מאובטח דרך עמוד התשלום.",
  },
  {
    id: 2,
    question: "האם אתם מציעים משלוחים? ואם כן, לאן?",
    answer:
      "כן, אנו מציעים משלוחים לכל רחבי הארץ. זמני האספקה והמחירים משתנים בהתאם לכתובת היעד.",
  },
  {
    id: 3,
    question: "האם ניתן לבצע הזמנה אישית לעוגות מיוחדות?",
    answer:
      "כן! אנו מציעים הזמנות בהתאמה אישית לעוגות ימי הולדת, חתונות ואירועים מיוחדים. ניתן ליצור איתנו קשר לתיאום.",
  },
  {
    id: 4,
    question: "האם אתם משתמשים בחומרי גלם טבעיים?",
    answer:
      "בהחלט! כל המוצרים שלנו עשויים מחומרי גלם טריים ואיכותיים, ללא חומרים משמרים וללא צבעי מאכל מלאכותיים.",
  },
  {
    id: 5,
    question: "איך ניתן לבדוק אם מוצר מסוים מכיל אלרגנים?",
    answer:
      "בעמוד המוצר מופיעה רשימת רכיבים מפורטת. אם יש לכם שאלות נוספות, ניתן ליצור איתנו קשר.",
  },
  {
    id: 6,
    question: "האם יש לכם אופציות טבעוניות או ללא גלוטן?",
    answer:
      "כן! אנו מציעים מבחר עוגות, עוגיות וממתקים טבעוניים וללא גלוטן. חפשו את התגיות בעמודי המוצרים.",
  },
  {
    id: 7,
    question: "מהי מדיניות הביטולים וההחזרים שלכם?",
    answer:
      "ניתן לבטל הזמנה עד 24 שעות לפני המשלוח. לאחר מכן, לא נוכל להבטיח החזר בשל הכנת המוצרים הטריים.",
  },
  {
    id: 8,
    question: "כמה זמן מראש צריך להזמין עוגות לאירועים?",
    answer:
      "אנו ממליצים להזמין לפחות 3-5 ימים מראש כדי להבטיח זמינות, במיוחד בעונות עמוסות.",
  },
];
const incentives = [
  {
    name: "תשלום באמצעות ביט",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bit-logo2024.png", // New link for Bit logo
    description: "שלם במהירות ובנוחות עם אפליקציית Bit הפופולרית.",
  },
  {
    name: "תמיכה ב-Apple Pay",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968279.png", // New link for Apple Pay logo

    description: "שלם בבטחה עם Apple Pay ישירות מהאייפון או השעון החכם שלך.",
  },
  {
    name: "כרטיסי אשראי מאובטחים",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1024px-Visa.svg.png",
    description: "אנו מקבלים כרטיסי Visa, Mastercard, PayPal ועוד.",
  },
];

function QandAComponent() {
  // const useScrollToHash = () => {
  //   useEffect(() => {
  //     // Check if there's a hash in the URL
  //     const hash = window.location.hash;
  //     if (hash) {
  //       // Find the element by the hash
  //       const element = document.querySelector(hash);
  //       if (element) {
  //         // Scroll into view with smooth behavior
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }, []); // Empty dependency array ensures it only runs once after initial render
  // };

  // useScrollToHash();
  return (
    // sm:py-32
    <div className="bg-white py-16" dir="rtl" id="about">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            אודות החנות שלנו
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            ברוכים הבאים לחנות האונליין שלנו! כל המוצרים בחנות מוכנים בעבודת יד
            על ידי קונדיטורית מומחית, תוך שימוש בחומרי גלם טריים ואיכותיים. כאן
            תמצאו עוגות, עוגיות וממתקים בעיצובים מרהיבים ובטעמים בלתי נשכחים.
            {/* <br />
            מחפשים משהו מיוחד? נשמח ליצור עבורכם קינוח בהתאמה אישית לכל אירוע! */}
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* <div className="bg-black pt-20 sr-only"> wawds</div> */}
      {/* secure payments logos  */}
      <div className="bg-white" id="securePayment">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-50 px-6 py-10 sm:p-12">
            <div className="mx-auto max-w-xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  תשלום מאובטח ונוח לכל לקוח
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  אנו מתחייבים לספק חווית תשלום בטוחה, מהירה ונוחה לכל
                  לקוחותינו, באמצעות טכנולוגיות אבטחה מתקדמות ומגוון רחב של
                  אמצעי תשלום.
                </p>
              </div>
              <div className="mx-auto mt-8 grid max-w-sm grid-cols-1 gap-x-6 gap-y-8 sm:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div
                    key={incentive.name}
                    className="text-center sm:flex sm:text-left lg:block lg:text-center"
                  >
                    <div className="sm:shrink-0">
                      <div className="flow-root">
                        <img
                          alt={incentive.name}
                          src={incentive.imageSrc}
                          className="mx-auto size-14 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-2 sm:ml-4 sm:mt-0 lg:ml-0 lg:mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        {incentive.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QandAComponent;
