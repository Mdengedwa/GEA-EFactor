
import React, { useMemo, useRef } from 'react';
import { UserProfile, Scores } from '../types';
import { COMPETENCIES } from '../constants';
import RadarChartComponent from './RadarChart';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResultsDashboardProps {
  userProfile: UserProfile;
  scores: Scores;
  onRetake: () => void;
}

const SummaryCard: React.FC<{title: string; items: {title: string; score: number}[]; colorClass: string}> = ({title, items, colorClass}) => (
    <div className="bg-white p-6 rounded-lg shadow">
        <h3 className={`text-xl font-bold mb-4 border-b-2 pb-2 ${colorClass}`}>{title}</h3>
        <ul className="space-y-3">
            {items.map(item => (
                <li key={item.title} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.title}</span>
                    <span className={`font-bold text-lg ${colorClass}`}>{item.score.toFixed(1)}</span>
                </li>
            ))}
        </ul>
    </div>
);


const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ userProfile, scores, onRetake }) => {
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const sortedCompetencies = useMemo(() => {
    return COMPETENCIES.map(c => ({
      ...c,
      score: scores[c.id]
    })).sort((a, b) => b.score - a.score);
  }, [scores]);

  const topStrengths = sortedCompetencies.slice(0, 3);
  const developmentAreas = sortedCompetencies.slice(-3).reverse();

  const handleDownloadPdf = () => {
    const input = resultsRef.current;
    if (input) {
      html2canvas(input, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`E-Factor-Assessment-${userProfile.name}.pdf`);
      });
    }
  };
  
  const handleJoinCommunity = () => {
    const headers = ['Competency', 'Average Score (/7)'];
    const rows = COMPETENCIES.map(c => [c.title, scores[c.id].toFixed(1)]);
    
    let csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(",") + "\n" 
        + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `E-Factor_Scores_${userProfile.name}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    const subject = "Request to Join Affiliates Community";
    const body = `Hi,\n\nPlease add me to your Affiliates community. My results are attached.\n\nFeel free to add me to WhatsApp using my number... (+27) 0...\n\nThanks,\n${userProfile.name}`;
    window.location.href = `mailto:info@durbanaffiliateconference.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  return (
    <div className="animate-fade-in">
        <div ref={resultsRef} className="bg-white p-4 sm:p-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-dark mb-2">Your Entrepreneurial Profile</h2>
                <p className="text-gray-600 text-lg">Assessment results for {userProfile.name}.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-10">
                <RadarChartComponent scores={scores} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 my-10">
                <SummaryCard title="Top 3 Strengths" items={topStrengths.map(c => ({ title: c.title, score: c.score }))} colorClass="text-green-600 border-green-500" />
                <SummaryCard title="Top 3 Development Areas" items={developmentAreas.map(c => ({ title: c.title, score: c.score }))} colorClass="text-amber-600 border-amber-500" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-dark mb-6 text-center">Competency Insights</h3>
                <div className="space-y-6">
                    {COMPETENCIES.map(c => (
                        <div key={c.id} className="p-4 border rounded-md">
                            <div className="flex justify-between items-start flex-wrap">
                                <div className="flex-1 min-w-[200px] mb-2 sm:mb-0">
                                    <h4 className="font-bold text-lg text-primary">{c.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{c.insight}</p>
                                </div>
                                <div className="text-right ml-4 flex-shrink-0">
                                    <p className="text-2xl font-bold text-secondary">{scores[c.id].toFixed(1)}</p>
                                    <p className="text-xs text-gray-500">/ 7</p>
                                </div>
                            </div>
                            {scores[c.id] < 3.5 && c.developmentUrl && (
                                <div className="mt-3 pt-3 border-t">
                                    <a href={c.developmentUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent/20 text-accent-800 hover:bg-accent/30 text-sm font-semibold py-2 px-4 rounded-md transition-colors">
                                        Watch a video to improve &rarr;
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <button
          onClick={handleDownloadPdf}
          className="py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors"
        >
          Download PDF Report
        </button>
        <button
          onClick={handleJoinCommunity}
          className="py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          Join Community via Email
        </button>
        <button
          onClick={onRetake}
          className="py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        >
          Retake Assessment
        </button>
      </div>
    </div>
  );
};

export default ResultsDashboard;