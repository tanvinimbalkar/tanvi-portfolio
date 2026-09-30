import PageFrame from '@/components/PageFrame';

export default function ProjectsPage() {
  return (
    <PageFrame>
      <div className="space-y-6 pt-12 text-gray-900">
        <h3 className="text-2xl font-bold sm:text-3xl">Projects</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 rounded-lg bg-gray-100 p-6">
            <h4 className="text-base font-semibold sm:text-lg">
              AI Sales Follow-Up
            </h4>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              Built a sales follow-up system that turns conversation notes into a personalized email. A three-step LangGraph pipeline classifies each lead, drafts the message, then critiques and revises it. The React app includes a sales dashboard, an Ask Sales AI chat over past runs, and a cost view for token usage. On the last eval run, classification accuracy was 96% and email quality scored 4.73/5.
            </p>
            <a
              href="https://github.com/tanvinimbalkar/ai-sales-followup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-blue-500 hover:text-blue-400"
            >
              View project →
            </a>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-100 p-6">
            <h4 className="text-base font-semibold sm:text-lg">
              Global Audience Intelligence Agent
            </h4>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              Built a chat app that lets marketers ask plain-English questions about global markets and audience reach. A LangChain agent, running on a local Ollama model, pulls real population and geography data through a FastAPI service and returns campaign-scoping answers, such as which regions have the largest addressable audiences.
            </p>
            <a
              href="https://github.com/tanvinimbalkar/global-audience-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-blue-500 hover:text-blue-400"
            >
              View project →
            </a>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-100 p-6">
            <h4 className="text-base font-semibold sm:text-lg">
              Supply Chain Analytics
            </h4>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              An end-to-end supply chain platform that monitors shipments in real time and predicts deliveries. Shipment data moves from Google Sheets through Kafka and MongoDB, is transformed with dbt, lands in BigQuery, and is shown on a Streamlit dashboard with machine-learning delivery predictions.
            </p>
            <a
              href="https://github.com/tanvinimbalkar/supply_chain_service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-blue-500 hover:text-blue-400"
            >
              View project →
            </a>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-100 p-6">
            <h4 className="text-base font-semibold sm:text-lg">
              Sea Level Rise Analysis
            </h4>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              A data mining project on coastal water levels. It covers cleaning and visualizing tide-station data, seasonal and temporal analysis, and forecasting with LSTM, TCN-LSTM, XGBoost, Prophet, decision trees, and random forests.
            </p>
            <a
              href="https://github.com/tanvinimbalkar/dmproject"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-blue-500 hover:text-blue-400"
            >
              View project →
            </a>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-100 p-6">
            <h4 className="text-base font-semibold sm:text-lg">
              SemEval 2026 Task 5 — Ambiguous Story Plausibility Rating
            </h4>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              Worked on SemEval 2026 Task 5, where we built a narrative understanding model to predict how plausible
              different word senses are within short, ambiguous stories. I fine-tuned a RoBERTa-based regression model on
              the official AmbiStory dataset and evaluated it using SemEval’s standard metrics, including Spearman correlation and within-standard-deviation accuracy.
              This project strengthened our experience in NLP modeling, semantic ambiguity and benchmark-driven evaluation.
            </p>
            <a
              href="https://github.com/tanvinimbalkar/SemEval-2026-Task-5-Ambiguous-Story-Plausibility-Rating"
              className="inline-block text-sm font-medium text-blue-500 hover:text-blue-400"
            >
              View project →
            </a>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}
