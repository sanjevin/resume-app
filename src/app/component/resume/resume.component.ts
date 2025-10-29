import { Component } from '@angular/core';
import { Resume } from 'src/app/model/resume.model';
import { ResumeService } from 'src/app/service/resume.service';

interface ResumeExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface SkillRow {
  category: string;
  detail: string;
}

interface ResumeData {
  name: string;
  linkedin: string;
  leetcode: string;
  hackerank: string;
  email: string;
  phone: string;
  summary: string;
  experiences: ResumeExperience[];
  skills: SkillRow[];
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private resumeService: ResumeService) {}

  resume: Resume = this.resumeService.getResumeData();

  resumeData: ResumeData = {
    name: 'Rohit Doshi',
    linkedin: 'Rohit Doshi',
    leetcode: 'LeetCode Profile',
    hackerank: 'Hackerank Profile',
    email: 'myemail@gmail.com',
    phone: '+919090909090',
    summary: `Results-driven back-end engineer with 6 years of hands-on experience designing and scaling cloud native microservices in Java. Proven track record in leading firms now aiming for a role at a top-tier product company. Expert in distributed systems, AWS-based deployments, Kubernetes orchestration, and real-time data pipelines. Adaptive to driving end-to-end delivery, mentoring teams, and optimizing performance under high SLAs.`,
    experiences: [
      {
        title: 'SDE 3 (Vice President - VP)',
        company: 'Goldman Sachs',
        location: 'Bengaluru',
        period: 'Jan 2022 - present',
        bullets: [
          "Led cross-functional teams of engineers (including contingent workers), driving end-to-end delivery of high-impact backend services for regulatory and trading platforms.",
          "Architected and executed a full rewrite of a legacy SOA application into Kubernetes-based microservices on AWS, improving system reliability from 95% to 99.5%.",
          "Introduced Redis-based caching layers to critical data pipelines, reducing average request latency by 70% and cutting infrastructure costs by 40%.",
          "Designed and implemented multi-region AWS deployments with auto-scaling policies, enabling zero downtime during peak trading hours.",
          "Established Prometheus metrics collection and Grafana dashboards across 20+ microservices; reduced Mean Time to Recover by 50% through real-time alerting and automated rollback scripts.",
          "Mentored interns and junior engineers; conducted weekly/bi-weekly code reviews, knowledge-share sessions, and brown-bag tech talks.",
          "Collaborated with product managers and stakeholders to define SLAs, OKRs, and roadmaps; ensured seamless integration with frontend, risk, and data analytics teams."
        ]
      },
      {
        title: 'Developer',
        company: 'Barclays',
        location: 'Pune',
        period: 'Jul 2019 - Jan 2022',
        bullets: [
          "Built and managed CI/CD pipelines in Jenkins and GitLab; automated Docker image builds and Kubernetes deployments for 10+ microservices.",
          "Designed and deployed AWS infrastructure to migrate on-premise workloads to cloud, reducing operational costs by 25%.",
          "Developed custom Bash scripts for automated backup, scaling, and fail-over of MySQL and Redis clusters, improving availability to 99.9%.",
          "Implemented IAM roles with least privilege, configured VPCs, subnets, and security groups to meet compliance."
        ]
      },
      {
        title: 'Project Intern',
        company: 'BMC Softwares',
        location: 'Pune',
        period: 'Sept 2018 - Apr 2019',
        bullets: [
          "Co-designed and implemented a predictive system to analyze code file severity using version control and defect tracking data. Utilized Flask Server and PostgreSQL Database for efficient system deployment.",
          "Contributed to creating and maintaining project tracking tools, ensuring clear communication of expectations and progress."
        ]
      }
    ],
    skills: [
      { category: 'Programming Languages', detail: 'Java(Proficient), C++(Beginner), Python(Beginner)' },
      { category: 'Database and Languages', detail: 'SQL, MySQL, Redis, MongoDB' },
      { category: 'Frameworks and Tools', detail: 'Spring Boot, Kubernetes, Docker, Terraform, Kafka, Prometheus, Grafana, JUnit, Mockito' },
      { category: 'Cloud Platforms', detail: 'AWS (Lambda, EC2, S3, RDS, ElastiCache, Load Balancer, API Gateway)' },
      { category: 'Version Control Tools and IDE', detail: 'Git, Gitlab, IntelliJ' },
      { category: 'Soft Skills', detail: 'Leadership, Collaboration, Planning, Teamwork, Time Management, Problem-Solving' }
    ]
  };
  
}
