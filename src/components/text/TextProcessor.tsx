
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Upload, Copy, ArrowRight, ListChecks, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { courseStructure, Course, Section } from "@/data/courseStructure";

const TextProcessor = () => {
  const [text, setText] = useState('');
  const [processedContent, setProcessedContent] = useState<{
    title: string;
    summary: string;
    keyPoints: string[];
  }>({
    title: '',
    summary: '',
    keyPoints: []
  });
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('paste');

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if it's a text file
    if (file.type !== 'text/plain') {
      toast({
        title: "Format non supporté",
        description: "Veuillez sélectionner un fichier texte (.txt)",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setText(content);
    };
    reader.readAsText(file);
  };

  // Process the text to extract important information
  const processText = () => {
    if (!text.trim()) {
      toast({
        title: "Texte vide",
        description: "Veuillez entrer ou télécharger du texte à analyser",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simple processing logic - can be made more sophisticated
    const lines = text.split('\n').filter(line => line.trim());
    let title = lines[0] || 'Sans titre';
    
    // Extract potential key points (lines starting with - or *)
    const keyPoints = lines
      .filter(line => line.trim().startsWith('-') || line.trim().startsWith('*'))
      .map(line => line.trim().replace(/^[-*]\s*/, ''));

    // Generate a summary (first few lines that aren't key points)
    const summaryLines = lines
      .filter(line => !line.startsWith('-') && !line.startsWith('*'))
      .slice(1, 5);
    const summary = summaryLines.join(' ');

    // Update processed content
    setProcessedContent({
      title,
      summary,
      keyPoints: keyPoints.length ? keyPoints : ['Aucun point clé identifié']
    });

    setIsProcessing(false);
    toast({
      title: "Traitement terminé",
      description: "Le texte a été analysé avec succès",
    });
  };

  // Add the processed content to a course section
  const addToSection = () => {
    if (!selectedCourse || !selectedSection) {
      toast({
        title: "Sélection incomplète",
        description: "Veuillez sélectionner un cours et une section",
        variant: "destructive"
      });
      return;
    }

    // This is where you would update your database or API
    // For this demo, we'll just show a success message
    toast({
      title: "Contenu ajouté",
      description: `Le contenu a été ajouté à ${courseStructure[selectedCourse]?.title} - ${
        courseStructure[selectedCourse]?.sections.find(s => s.id === selectedSection)?.title
      }`,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Analyseur de texte</CardTitle>
          <CardDescription>
            Téléchargez ou collez du texte pour l'analyser et l'ajouter à vos sections de cours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="paste" onValueChange={setActiveTab} value={activeTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="paste">Coller du texte</TabsTrigger>
              <TabsTrigger value="upload">Télécharger un fichier</TabsTrigger>
            </TabsList>
            <TabsContent value="paste" className="space-y-4 pt-4">
              <Textarea
                placeholder="Collez votre texte ici..."
                className="min-h-[200px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </TabsContent>
            <TabsContent value="upload" className="space-y-4 pt-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <FileText className="h-10 w-10 text-gray-400" />
                  <p className="text-sm text-gray-600">
                    Sélectionnez un fichier texte à analyser
                  </p>
                  <label className="cursor-pointer">
                    <span className="rounded bg-swiss-blue px-4 py-2 text-white text-sm hover:bg-opacity-90 transition-colors">
                      Parcourir
                    </span>
                    <input
                      type="file"
                      accept=".txt"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              </div>
              {text && (
                <div className="mt-4">
                  <p className="font-medium">Aperçu du texte:</p>
                  <div className="p-3 bg-gray-50 rounded-md text-sm max-h-[200px] overflow-y-auto mt-2">
                    {text.substring(0, 500)}
                    {text.length > 500 && '...'}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-4">
            <Button 
              onClick={processText} 
              disabled={!text.trim() || isProcessing}
              className="flex items-center gap-2"
            >
              <Sparkles size={16} />
              {isProcessing ? 'Traitement...' : 'Analyser le texte'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {processedContent.title && (
        <Card>
          <CardHeader>
            <CardTitle>Résultat de l'analyse</CardTitle>
            <CardDescription>
              Vous pouvez modifier ces éléments avant de les ajouter à une section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Titre</label>
              <Input
                id="title"
                value={processedContent.title}
                onChange={(e) => setProcessedContent({...processedContent, title: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="summary" className="text-sm font-medium">Résumé</label>
              <Textarea
                id="summary"
                value={processedContent.summary}
                onChange={(e) => setProcessedContent({...processedContent, summary: e.target.value})}
                className="min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Points clés</label>
              {processedContent.keyPoints.map((point, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={point}
                    onChange={(e) => {
                      const newPoints = [...processedContent.keyPoints];
                      newPoints[index] = e.target.value;
                      setProcessedContent({...processedContent, keyPoints: newPoints});
                    }}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const newPoints = [...processedContent.keyPoints];
                      newPoints.splice(index, 1);
                      setProcessedContent({...processedContent, keyPoints: newPoints});
                    }}
                  >
                    &times;
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setProcessedContent({
                    ...processedContent,
                    keyPoints: [...processedContent.keyPoints, '']
                  });
                }}
              >
                + Ajouter un point
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-medium">Cours</label>
                <select
                  id="course"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={selectedCourse}
                  onChange={(e) => {
                    setSelectedCourse(e.target.value);
                    setSelectedSection('');
                  }}
                >
                  <option value="">Sélectionner un cours</option>
                  {Object.values(courseStructure).map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="section" className="text-sm font-medium">Section</label>
                <select
                  id="section"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  disabled={!selectedCourse}
                >
                  <option value="">Sélectionner une section</option>
                  {selectedCourse && courseStructure[selectedCourse]?.sections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button 
                onClick={addToSection} 
                disabled={!selectedCourse || !selectedSection}
                className="flex items-center gap-2"
              >
                <ArrowRight size={16} />
                Ajouter à la section
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TextProcessor;
