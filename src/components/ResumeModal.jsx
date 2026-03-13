import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import styles from './ResumeModal.module.css'

export default function ResumeModal({ open, onOpenChange }) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sriram_A_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle>My Resume</DialogTitle>
          <DialogDescription>
            View or download my resume
          </DialogDescription>
        </DialogHeader>
        <div className={styles.resumeContainer}>
          <iframe
            src="/resume.pdf"
            className={styles.resumeFrame}
            title="Resume Preview"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleDownload} className={styles.downloadButton}>
            <Download className="size-4" />
            Download Resume
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
