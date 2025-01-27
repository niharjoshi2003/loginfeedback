import React, { useState } from 'react';
import { Star } from 'lucide-react';

const FeedbackForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: ''
  });
  const [ratings, setRatings] = useState({});
  const [hover, setHover] = useState({});
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = {
    food: {
      title: "खाद्य गुणवत्ता / Food Quality",
      questions: [
        { id: "taste", label: "स्वाद / Taste" },
        { id: "freshness", label: "ताजेपणा / Freshness" },
        { id: "menudiversity", label: "मेनू विविधता / Menu diversity" },
        { id: "quantity", label: "जेवणाचे प्रमाण / Quantity" }
      ]
    },
    service: {
      title: "सेवा / Service",
      questions: [
        { id: "staff_behavior", label: "कर्मचारी वर्तन / Staff Behavior" },
        { id: "serving_time", label: "वाढण्याची वेळ / Serving Time" },
        { id: "cleanliness", label: "स्वच्छता / Cleanliness" }
      ]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userInfo, ratings, comment });
    setSubmitted(true);
  };

  const StarRating = ({ category, questionId }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="focus:outline-none transition-transform hover:scale-110"
          onMouseEnter={() => setHover({ ...hover, [`${category}_${questionId}`]: star })}
          onMouseLeave={() => setHover({ ...hover, [`${category}_${questionId}`]: 0 })}
          onClick={() => setRatings({ ...ratings, [`${category}_${questionId}`]: star })}
        >
          <Star
            size={24}
            className={`transition-colors duration-200 ${
              star <= (hover[`${category}_${questionId}`] || ratings[`${category}_${questionId}`] || 0)
                ? 'fill-orange-500 text-orange-500'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-orange-100/50 to-orange-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="text-center space-y-4">
            <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
          </div>
        </div>
        <h2 className="mt-8 text-center">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent font-serif tracking-tight">
            Hotel Jagadamb
          </span>
          <p className="font-bold	 text-gray-600 mb-8 ">
          "स्वाद महाराष्ट्राचा, सेवा आमची – बसल्या जागेवर ऑर्डर करा, स्वादिष्ट जेवणाचा आनंद घ्या!"
            <br />          
          </p>
        </h2>
              <p className="text-orange-600 text-lg font-medium">आपल्या अभिप्राय साठी धन्यवाद</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-4 shadow-xl">
              <div>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  placeholder="आपले नाव / Your Name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none bg-white"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                  placeholder="मोबाईल नंबर / Phone Number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none bg-white"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            {Object.entries(categories).map(([categoryKey, category]) => (
              <div key={categoryKey} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-6 shadow-xl">
                <h2 className="text-xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((question) => (
                    <div key={question.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-orange-50/80 p-4 rounded-xl transition-colors">
                      <label className="text-gray-700 font-medium">{question.label}</label>
                      <StarRating category={categoryKey} questionId={question.id} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="अतिरिक्त टिप्पणी / Additional Comments"
                className="w-full p-4 h-32 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">धन्यवाद!</h2>
            <p className="text-gray-600">आपल्या अभिप्राय साठी धन्यवाद</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setUserInfo({ name: '', phone: '' });
                setRatings({});
                setComment('');
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-500/30"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;