import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");
  const handelChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo : Add tweet to ths store
    console.log("New Tweet:", text);
    setText("");
  };

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/**TODO: redirect if submitted*/}
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handelChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTweet;
