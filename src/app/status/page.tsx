'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  responseTime: string;
  description: string;
  lastIncident?: string;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  description: string;
  timestamp: string;
  updates: {
    time: string;
    message: string;
    status: string;
  }[];
}

const services: ServiceStatus[] = [
  {
    name: 'API Gateway',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '45ms',
    description: 'Core API endpoints and routing'
  },
  {
    name: 'AI Models',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '1.2s',
    description: 'GPT-4, Claude, Gemini, and other AI models'
  },
  {
    name: 'AlphaRouter',
    status: 'operational',
    uptime: '99.98%',
    responseTime: '120ms',
    description: 'Intelligent model routing and optimization'
  },
  {
    name: 'Agent Marketplace',
    status: 'operational',
    uptime: '99.97%',
    responseTime: '200ms',
    description: 'AI agent deployment and discovery'
  },
  {
    name: 'ION Protocol',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '80ms',
    description: 'Intelligent Ontology Network infrastructure'
  },
  {
    name: 'Authentication',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '35ms',
    description: 'User authentication and authorization'
  },
  {
    name: 'Dashboard',
    status: 'operational',
    uptime: '99.96%',
    responseTime: '150ms',
    description: 'Web dashboard and user interface'
  },
  {
    name: 'Webhooks',
    status: 'operational',
    uptime: '99.94%',
    responseTime: '90ms',
    description: 'Event notifications and integrations'
  }
];

const recentIncidents: Incident[] = [
  {
    id: '1',
    title: 'Scheduled Maintenance - Model Updates',
    status: 'resolved',
    severity: 'minor',
    description: 'Routine maintenance to update AI models and improve performance',
    timestamp: '2024-01-15 02:00 UTC',
    updates: [
      {
        time: '02:00 UTC',
        message: 'Maintenance window started. Some AI models may experience brief delays.',
        status: 'monitoring'
      },
      {
        time: '02:45 UTC',
        message: 'Model updates completed successfully. All services restored.',
        status: 'resolved'
      }
    ]
  }
];

const metrics = [
  {
    label: 'Overall Uptime',
    value: '99.97%',
    trend: '+0.02%',
    color: 'text-green-400'
  },
  {
    label: 'Avg Response Time',
    value: '156ms',
    trend: '-12ms',
    color: 'text-blue-400'
  },
  {
    label: 'API Requests/min',
    value: '2.4M',
    trend: '+15%',
    color: 'text-purple-400'
  },
  {
    label: 'Active Users',
    value: '12.5K',
    trend: '+8%',
    color: 'text-cyan-400'
  }
];

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/20';
      case 'maintenance':
        return 'text-blue-400 bg-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return '✅';
      case 'degraded':
        return '⚠️';
      case 'outage':
        return '🔴';
      case 'maintenance':
        return '🔧';
      default:
        return '❓';
    }
  };

  const getSeverityColor = (severity: Incident['severity']) => {
    switch (severity) {
      case 'minor':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'major':
        return 'text-orange-400 bg-orange-400/20';
      case 'critical':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const overallStatus = services.every(s => s.status === 'operational') ? 'operational' : 'degraded';

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="green" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>📊 System Status</HeaderText>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Real-time</span> <span className="font-normal">System</span> <span className="font-bold">Health</span>
            </p>
            
            {/* Overall Status */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg ${getStatusColor(overallStatus)}`}>
                <span className="text-2xl">{getStatusIcon(overallStatus)}</span>
                <span className="text-xl font-bold">
                  {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Systems Degraded'}
                </span>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              Last updated: {currentTime.toLocaleString()} UTC
            </p>
          </motion.div>
        </div>
      </div>

      {/* Metrics */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center"
            >
              <h3 className="text-gray-400 text-sm mb-2">{metric.label}</h3>
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-500">
                {metric.trend.startsWith('+') ? '↗️' : '↘️'} {metric.trend}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Status */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>🔧 Service Status</HeaderText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                  {getStatusIcon(service.status)} {service.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Uptime:</span>
                  <div className="text-green-400 font-medium">{service.uptime}</div>
                </div>
                <div>
                  <span className="text-gray-400">Response:</span>
                  <div className="text-blue-400 font-medium">{service.responseTime}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>📋 Recent Incidents</HeaderText>
        </h2>
        
        {recentIncidents.length === 0 ? (
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Recent Incidents</h3>
            <p className="text-gray-400">All systems have been running smoothly!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{incident.title}</h3>
                    <p className="text-gray-400 text-sm">{incident.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                      {incident.status}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  {incident.timestamp}
                </div>

                <div className="space-y-3">
                  {incident.updates.map((update, idx) => (
                    <div key={idx} className="border-l-2 border-gray-600 pl-4">
                      <div className="text-sm text-gray-400">{update.time}</div>
                      <div className="text-gray-300">{update.message}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Subscribe to Updates */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-16">
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to status updates and get notified about incidents and maintenance windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all">
              📧 Subscribe to Updates
            </button>
            <button className="px-8 py-3 bg-black/50 text-white border border-white/30 font-bold rounded-lg hover:bg-white/10 transition-all">
              📱 Get Mobile Alerts
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
