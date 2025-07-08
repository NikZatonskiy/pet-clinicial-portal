function PatientResponseRate() {
  return (
    <div className="home__main__patient-response-rate border-4 rounded-lg">
      <h2>Patient Response Rate</h2>
      <p>
        This statistic shows the percentage of patients who sent a report at
        least once in the last 7 days
      </p>
      <div className="home__main__patient-response-rate__reports">
        <span>17 patients report</span>
        <span>from 20 patients</span>
      </div>
      <div className="home__main__patient-response-rate__graph"></div>
    </div>
  );
}

export default PatientResponseRate;
