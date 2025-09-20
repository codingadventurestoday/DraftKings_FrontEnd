import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Activity, Target } from 'lucide-react';

const DataAnalyzeSection = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('');
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data for demonstration
  const sampleData = [
    { week: 'Week 1', accuracy: 65, games: 16 },
    { week: 'Week 2', accuracy: 72, games: 16 },
    { week: 'Week 3', accuracy: 58, games: 16 },
    { week: 'Week 4', accuracy: 69, games: 16 },
    { week: 'Week 5', accuracy: 74, games: 15 },
    { week: 'Week 6', accuracy: 61, games: 15 },
    { week: 'Week 7', accuracy: 67, games: 14 },
    { week: 'Week 8', accuracy: 71, games: 14 },
  ];

  const nflTeams = [
    'Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills',
    'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns',
    'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers',
    'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs',
    'Las Vegas Raiders', 'Los Angeles Chargers', 'Los Angeles Rams', 'Miami Dolphins',
    'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants',
    'New York Jets', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers',
    'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Commanders'
  ];

  const handleCreateChart = () => {
    if (!selectedType || !selectedTeam || !selectedTimeframe) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setChartData(sampleData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="data-analyze" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Data Analysis Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Customize your analysis by selecting the betting type, team, and timeframe. 
            Generate comprehensive visualizations of DraftKings' predictive accuracy.
          </p>
        </div>

        {/* Controls */}
        <Card className="data-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              Analysis Criteria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {/* Betting Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Betting Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="spread">Point Spread</SelectItem>
                    <SelectItem value="overunder">Over/Under</SelectItem>
                    <SelectItem value="moneyline">Moneyline</SelectItem>
                    <SelectItem value="movement">Line Movement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Team Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Team</label>
                <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border max-h-48">
                    <SelectItem value="all">All NFL Teams</SelectItem>
                    {nflTeams.map((team) => (
                      <SelectItem key={team} value={team.toLowerCase().replace(/\s+/g, '-')}>
                        {team}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Timeframe */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Timeframe</label>
                <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="season">Full Season</SelectItem>
                    <SelectItem value="week1">Week 1</SelectItem>
                    <SelectItem value="week2">Week 2</SelectItem>
                    <SelectItem value="week3">Week 3</SelectItem>
                    <SelectItem value="week4">Week 4</SelectItem>
                    <SelectItem value="week5">Week 5</SelectItem>
                    <SelectItem value="week6">Week 6</SelectItem>
                    <SelectItem value="week7">Week 7</SelectItem>
                    <SelectItem value="week8">Week 8</SelectItem>
                    <SelectItem value="playoffs">Playoffs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Create Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-transparent">Action</label>
                <Button 
                  onClick={handleCreateChart}
                  disabled={!selectedType || !selectedTeam || !selectedTimeframe || isLoading}
                  className="w-full bg-primary hover:bg-primary/90 glow-effect"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </div>
                  ) : (
                    'Create Analysis'
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart Display */}
        {chartData.length > 0 && (
          <Card className="data-card animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                DraftKings Accuracy Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="week" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--foreground))'
                      }}
                      formatter={(value, name) => [`${value}%`, 'Accuracy']}
                    />
                    <Bar 
                      dataKey="accuracy" 
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              {/* Stats Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">67.1%</div>
                  <div className="text-sm text-muted-foreground">Average Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">124</div>
                  <div className="text-sm text-muted-foreground">Games Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">74%</div>
                  <div className="text-sm text-muted-foreground">Best Week</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Placeholder when no data */}
        {chartData.length === 0 && (
          <Card className="data-card text-center py-12">
            <CardContent>
              <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Analyze
              </h3>
              <p className="text-muted-foreground">
                Select your criteria above and click "Create Analysis" to generate insights
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default DataAnalyzeSection;