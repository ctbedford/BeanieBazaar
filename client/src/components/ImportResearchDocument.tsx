import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { importResearchDocumentToNode } from "@/lib/yamlParser";
import { ResearchNode } from "@/data/researchSpineData";

interface ImportResearchDocumentProps {
  researchNodes: ResearchNode[];
  onImport: (updatedNodes: ResearchNode[]) => void;
}

export default function ImportResearchDocument({ researchNodes, onImport }: ImportResearchDocumentProps) {
  const [yamlContent, setYamlContent] = useState("");
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleImport = () => {
    try {
      if (!yamlContent.trim()) {
        setImportStatus("error");
        setErrorMessage("Please paste YAML content before importing");
        return;
      }

      const updatedNodes = importResearchDocumentToNode(yamlContent, researchNodes);
      onImport(updatedNodes);
      setImportStatus("success");
      setYamlContent("");
      
      // Auto-close after success
      setTimeout(() => {
        setIsOpen(false);
        setImportStatus("idle");
      }, 2000);
    } catch (error) {
      setImportStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unknown error occurred during import");
    }
  };

  if (!isOpen) {
    return (
      <Button 
        variant="outline" 
        onClick={() => setIsOpen(true)}
        className="mb-4"
      >
        Import Research Document
      </Button>
    );
  }

  return (
    <Card className="mb-6 border-dashed border-2">
      <CardHeader className="pb-2">
        <CardTitle>Import Research Document</CardTitle>
        <CardDescription>
          Paste the YAML content of a research document to import it
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Textarea
          value={yamlContent}
          onChange={(e) => setYamlContent(e.target.value)}
          placeholder="Paste YAML content here..."
          className="min-h-[200px] font-mono text-sm"
        />
        
        {importStatus === "error" && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Import Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
        {importStatus === "success" && (
          <Alert variant="default" className="mt-4 bg-green-50 border-green-200 text-green-800">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Research document has been imported successfully.</AlertDescription>
          </Alert>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={handleImport}>
          Import Document
        </Button>
      </CardFooter>
    </Card>
  );
}