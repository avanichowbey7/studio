
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Stethoscope, Building2, Info } from "lucide-react";
import { suggestDoctor, SuggestDoctorOutput } from "@/ai/flows/suggest-doctor-based-on-symptoms";
import { useToast } from "@/hooks/use-toast";

export function DoctorSuggestionTool() {
  const [symptoms, setSymptoms] = useState("");
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestDoctorOutput | null>(null);
  const { toast } = useToast();

  const handleSuggest = async () => {
    if (!symptoms) {
      toast({
        variant: "destructive",
        title: "Input required",
        description: "Please describe your symptoms first.",
      });
      return;
    }

    setLoading(true);
    try {
      const output = await suggestDoctor({
        symptomsDescription: symptoms,
        medicalHistory: history,
      });
      setResult(output);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "AI Suggestion Failed",
        description: "Something went wrong while consulting the AI doctor.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-blue-100 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-blue-500 fill-blue-500" />
          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">AI Assistant</Badge>
        </div>
        <CardTitle className="text-2xl text-blue-900">Not sure which doctor to see?</CardTitle>
        <CardDescription>
          Describe your symptoms and our AI assistant will suggest the right department.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">How are you feeling?</label>
            <Textarea
              placeholder="Example: I have been having sharp chest pain and shortness of breath for two days..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-[100px] border-blue-100 focus:ring-blue-200"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Any past medical history? (Optional)</label>
            <Textarea
              placeholder="Example: High blood pressure, taking Atenolol daily."
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              className="min-h-[60px] border-blue-100 focus:ring-blue-200"
            />
          </div>
        </div>

        <Button
          onClick={handleSuggest}
          disabled={loading}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all active:scale-[0.98]"
        >
          {loading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Symptoms...</>
          ) : (
            <>Get Suggestion</>
          )}
        </Button>

        {result && (
          <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100 shadow-inner">
              <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                <Info className="h-5 w-5" /> Recommendation
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-green-50">
                  <Stethoscope className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-green-600 uppercase tracking-wider">Suggested Doctor</p>
                    <p className="text-base font-bold text-gray-900">{result.suggestedDoctor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-green-50">
                  <Building2 className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <p className="text-xs font-medium text-green-600 uppercase tracking-wider">Department</p>
                    <p className="text-base font-bold text-gray-900">{result.suggestedDepartment}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-900/5 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-green-800">Why:</span> {result.reason}
                </p>
              </div>
              <p className="mt-4 text-[10px] text-gray-500 italic text-center">
                *This is an AI recommendation. If you have an emergency, please visit the hospital immediately.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { Badge } from "@/components/ui/badge";
