function AIResult(props) {

  return (

    <div className="ai-result-container">

      <h2>AI Analysis Result</h2>

      <div className="ai-card">

        <p>
          <strong>Priority:</strong> {props.result.priority}
        </p>

        <p>
          <strong>Department:</strong> {props.result.department}
        </p>

        <p>
          <strong>Summary:</strong> {props.result.summary}
        </p>

        <p>
          <strong>Auto Response:</strong> {props.result.autoResponse}
        </p>

      </div>

    </div>

  );

}

export default AIResult;