import React from "react";

const storeTopics = [
  {
    title: "מוצרים חדשים",
    description:
      "גלו את ההשקות החדשות שלנו! קולקציית Basic Tees מגיעה עם שדרוגים מדהימים - ארבעה פתחים חדשים שעושים את כל ההבדל. הצטרפו למגמה החדשה ולסטייל הייחודי שלנו!",
    isChecked: "", //verify if the params fit the element
  },
  {
    title: "עוגות",
    description:
      "ברוכים הבאים לעולם העוגות שלנו! כאן תוכלו למצוא מבחר עוגות המשלבות טעמים מרהיבים, מרקמים רכים ויצירתיות יוצאת דופן. בין אם אתם מחפשים עוגה מושלמת לשבת, יומולדת או אירוע מיוחד, אנחנו כאן להפוך את היום שלכם למתוק במיוחד.",
    isChecked: "עוגות",
  },
  {
    title: "עוגיות",
    description:
      "אין כמו עוגיות חמות ופריכות שממלאות את הבית בניחוחות מושלמים. היכנסו לעולם העוגיות שלנו ותיהנו ממבחר רחב של טעמים - מהקלאסי ועד ליצירתי ביותר. כל עוגייה נאפתה באהבה ובדיוק, במיוחד עבורכם.",
    isChecked: "עוגיות",
  },
  {
    title: "טארטים",
    description:
      "טארטים הם האיזון המושלם בין בצק עדין למילוי עשיר ומושחת. בואו לגלות את מבחר הטארטים שלנו, המתאימים לכל חגיגה ולכל מצב רוח. כל טארט מספר סיפור של אמנות אפייה ודיוק בלתי מתפשר.",
    isChecked: "טארטים",
  },
  {
    title: "מארזים",
    description:
      "מארזי המתוקים שלנו הם הדרך המושלמת לפנק את היקרים לכם - או את עצמכם! כל מארז נבחר בקפידה ומציע חוויית טעמים עשירה ומפתיעה. מתנה שתמיד תעלה חיוך.",
    isChecked: "מארזים",
  },
  {
    title: "קינוחי כוסות",
    description:
      "ברוכים הבאים לעולם קינוחי הכוסות, שבו כל שכבה נוצרה כדי להפתיע אתכם מחדש. קינוחים אישיים שמתאימים לכל אירוע - או פשוט ליום שבו מתחשק לכם רגע קטן של אושר מתוק.",
    isChecked: "קינוחי-כוסות",
  },
  {
    title: "גלידות",
    description:
      "קרם הגלידה המושלם מחכה לכם כאן! מבחר טעמי גלידה ייחודיים, עשויים מרכיבים איכותיים ובאהבה. בין אם אתם אוהבים קלאסיקות או טעמים מיוחדים, כאן תמצאו את גלידת החלומות שלכם.",
    isChecked: "גלידות",
  },
];

function StotrePageTopics({ normalizedType }) {
  // option.isChecked === normalizedType ||
  // (option.isChecked === "" &&
  //   normalizedType === "")
  //   ? "bg-gray-100 text-gray-900 "
  //   : "text-gray-700"

  return (
    <div className="border-b border-gray-200 pb-10 pt-24">
      {storeTopics
        .filter((option) => {
          return (
            option.isChecked === normalizedType ||
            (option.isChecked === "" && normalizedType === "")
          );
        })
        .map((option) => (
          <div key={option.title}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {option.title}{" "}
            </h1>
            <p className="mt-4 text-base text-gray-500">{option.description}</p>
          </div>
        ))}
    </div>
  );
}

export default StotrePageTopics;
